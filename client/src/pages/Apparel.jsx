import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

const Apparel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch("http://localhost:3000/apparel");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToBasket(product);
    navigate("/basket");
  };

  if (loading) {
    return <p className="text-center py-20">Loading products...</p>;
  }

  return (
    <div className="w-full bg-white min-h-screen">
      <h1 className="text-[80px] p-[10px] font-extrabold transition-all duration-500 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(180deg,rgba(255,0,0,1)_3%,rgba(255,143,143,1)_48%,rgba(5,0,158,1)_84%)]">
        APPAREL
      </h1>
      <div className="border-b-2 border-blue-900"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 px-8 py-10">
        {products.map((product) => (
          <div key={product.id} className="group relative">


            <Link to={`/product/apparel/${product.id}`} className="block">
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.img})` }}
                />
                {product.tag && (
                  <div className="absolute bottom-4 left-4 bg-white px-2 py-1 flex items-center gap-1 text-[10px] font-bold border border-gray-200 shadow-sm">
                    <span className="text-yellow-500">★</span> {product.tag}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">
                  {product.category}
                </p>
                <h3 className="text-[15px] font-medium leading-tight text-gray-800 group-hover:underline">
                  {product.name}
                </h3>
                <p className="text-[15px] font-bold text-black pt-1">
                  {product.price}
                </p>
              </div>
            </Link>

            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="mt-2 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer relative z-10"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apparel;