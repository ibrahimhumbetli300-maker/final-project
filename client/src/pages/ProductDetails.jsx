import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiShoppingBag } from "react-icons/hi2";
import { useBasket } from "../context/BasketContext";
import { useTranslation } from "react-i18next";
import { useLocalizedProduct } from "../hooks/useLocalizedProduct";

const ProductDetails = () => {
  const { t } = useTranslation();
  const { getLocalizedProduct } = useLocalizedProduct();
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { addToBasket } = useBasket();
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState(false);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        console.log(`Fetching: http://localhost:3000/${category}/${id}`);

        if (!category || category === "undefined") {
          throw new Error(t('category_not_found'));
        }

        const res = await fetch(`http://localhost:3000/${category}/${id}`);

        if (!res.ok) throw new Error(t('product_not_found'));
        const data = await res.json();

        setProduct({ ...data, category });
      } catch (err) {
        console.error("Xəta:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (category && id) {
      fetchProduct();
    }
  }, [category, id, t]);

  const handleAddToCart = () => {
    if (product) {
      if (product.sizes && !selectedSize) {
        setSizeError(true);
        return;
      }
      addToBasket(product, selectedSize);
      navigate("/basket");
    }
  };

  const localizedProduct = getLocalizedProduct(product);

  if (loading) return <div className="text-center py-20 text-xl font-bold">{t('loading')}</div>;


  if (error) {
    return (
      <div className="text-center py-20 flex flex-col items-center text-red-600">
        <h2 className="text-2xl mb-4">{t('error_title')}</h2>
        <p className="mb-4 text-black">{error}</p>
        <p className="text-gray-500 text-sm">URL: /product/{category}/{id}</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-900 underline cursor-pointer">{t('go_back')}</button>
      </div>
    );
  }

  if (!localizedProduct) return null;

  return (
    <div className="w-full min-h-screen bg-white pt-10 pb-10 px-4 md:px-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 cursor-pointer text-gray-700 hover:text-blue-900">
        <HiArrowLeft /> {t('go_back')}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-gray-200">

          <img src={localizedProduct?.img} alt={localizedProduct?.name} className="max-h-[500px] object-contain" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-yellow-600 font-bold uppercase mb-2 tracking-widest">
            {localizedProduct?.category || category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#0b0f2f]">
            {localizedProduct?.name}
          </h1>
          <p className="text-3xl text-blue-900 font-bold mb-6">
            {localizedProduct?.price}
          </p>

          {localizedProduct?.sizes && (
            <div className="mb-6">
              <p className="font-bold mb-2 text-gray-800">{t('select_size') || 'Select Size'}:</p>
              <div className="flex flex-wrap gap-2">
                {localizedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`px-4 py-2 border rounded-md font-medium transition-all duration-200 ${selectedSize === size
                        ? "bg-[#0b0f2f] text-white border-[#0b0f2f]"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#0b0f2f]"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-red-500 text-sm mt-2 font-medium">
                  {t('please_select_size') || 'Please select a size'}
                </p>
              )}
            </div>
          )}

          <button onClick={handleAddToCart} className="bg-[#0b0f2f] text-white py-4 px-10 rounded-lg cursor-pointer flex items-center gap-2 justify-center hover:bg-yellow-500 hover:text-black transition duration-300 shadow-lg">
            {t('add_to_basket')} <HiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;