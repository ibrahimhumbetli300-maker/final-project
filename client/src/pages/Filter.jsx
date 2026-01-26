import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingBag,
  ChevronLeft,
  Star,
  Truck,
  RotateCcw,
  Info,
} from "lucide-react";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const product = products?.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#004D98]">Məhsul tapılmadı</h2>
        <Link
          to="/"
          className="mt-4 text-[#A50044] hover:underline flex items-center gap-2"
        >
          <ChevronLeft size={20} /> Ana səhifəyə qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500 uppercase tracking-widest">
        <Link to="/" className="hover:text-[#004D98]">
          Home
        </Link>{" "}
        /
        <span className="ml-2 text-black">
          {product.category || "Collection"}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-4">
          <div className="relative bg-[#F6F6F6] rounded-sm overflow-hidden group">
            {product.tag && (
              <span className="absolute top-6 left-6 z-10 bg-[#A50044] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-tighter">
                {product.tag}
              </span>
            )}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="border-b pb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#181733] leading-tight uppercase italic italic-font-custom">
              {product.name}
            </h1>
            <div className="flex items-center mt-4 gap-4">
              <span className="text-2xl font-semibold text-[#004D98]">
                {product.price}
              </span>
              <div className="flex items-center text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="ml-2 text-xs text-gray-400 font-medium">
                  (4.8)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold uppercase tracking-widest">
                Select Size
              </span>
              <button className="text-[10px] underline text-gray-500 flex items-center gap-1">
                <Info size={12} /> SIZE GUIDE
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-medium border transition-all ${
                    selectedSize === size
                      ? "border-[#004D98] bg-[#004D98] text-white"
                      : "border-gray-200 hover:border-black text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center border w-max">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border-r hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-6 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-l hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>

            <button className="w-full bg-[#181733] hover:bg-[#A50044] text-white py-5 flex items-center justify-center gap-3 transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-xl">
              <ShoppingBag size={20} />
              Add To Bag
            </button>
          </div>

          <div className="mt-10 space-y-6 bg-gray-50 p-6 rounded-sm">
            <div className="flex items-start gap-4">
              <Truck size={20} className="text-[#004D98]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">
                  Standard Shipping
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Free for Culers Premium members. 3-5 business days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <RotateCcw size={20} className="text-[#004D98]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">
                  Free Returns
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Within 30 days of purchase. Conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
