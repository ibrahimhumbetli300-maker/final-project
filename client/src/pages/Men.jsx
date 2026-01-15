import React, { useState, useEffect } from "react";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH MƏLUMATLARI BESTSELLERS ENDPOINT-DƏN
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch("http://localhost:3000/men");
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

  if (loading) {
    return <p className="text-center py-20">Loading products...</p>;
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* TITLE */}
      <h1 className="text-[80px] p-[10px] font-extrabold transition-all duration-500 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(180deg,rgba(255,0,0,1)_3%,rgba(255,143,143,1)_48%,rgba(5,0,158,1)_84%)]">
     MEN'S APPAREL
      </h1>
      <div className="border-b-2 border-blue-900"></div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 px-8 py-10">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.img})` }}
              />

              {product.tag && (
                <div className="absolute bottom-4 left-4 bg-white px-2 py-1 flex items-center gap-1 text-[10px] font-bold border border-gray-200 shadow-sm">
                  <span className="text-yellow-500">★</span>
                  {product.tag}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
