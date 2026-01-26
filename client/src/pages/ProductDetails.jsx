import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiShoppingBag } from "react-icons/hi2";
import { useBasket } from "../context/BasketContext";

const ProductDetails = () => {

  const { category, id } = useParams(); 
  const navigate = useNavigate();
  const { addToBasket } = useBasket();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        console.log(`Fetching: http://localhost:3000/${category}/${id}`);

        if (!category || category === "undefined") {
            throw new Error("Kateqoriya tapılmadı (URL səhvdir)");
        }

        const res = await fetch(`http://localhost:3000/${category}/${id}`);
        
        if (!res.ok) throw new Error("Məhsul tapılmadı (Server xətası)");
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
  }, [category, id]);

  const handleAddToCart = () => {
    if (product) {
      addToBasket(product);
      navigate("/basket");
    }
  };

  if (loading) return <div className="text-center py-20 text-xl font-bold">Yüklənir...</div>;


  if (error) {
    return (
      <div className="text-center py-20 flex flex-col items-center text-red-600">
        <h2 className="text-2xl mb-4">Xəta baş verdi!</h2>
        <p className="mb-4 text-black">{error}</p>
        <p className="text-gray-500 text-sm">URL: /product/{category}/{id}</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-900 underline cursor-pointer">Geriyə qayıt</button>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="w-full min-h-screen bg-white pt-10 pb-10 px-4 md:px-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 cursor-pointer text-gray-700 hover:text-blue-900">
        <HiArrowLeft /> Geriyə
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-gray-200">
  
          <img src={product?.img} alt={product?.name} className="max-h-[500px] object-contain" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-yellow-600 font-bold uppercase mb-2 tracking-widest">
            {product?.category || category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#0b0f2f]">
            {product?.name}
          </h1>
          <p className="text-3xl text-blue-900 font-bold mb-6">
            {product?.price}
          </p>
          
          <button onClick={handleAddToCart} className="bg-[#0b0f2f] text-white py-4 px-10 rounded-lg cursor-pointer flex items-center gap-2 justify-center hover:bg-yellow-500 hover:text-black transition duration-300 shadow-lg">
            SƏBƏTƏ AT <HiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;