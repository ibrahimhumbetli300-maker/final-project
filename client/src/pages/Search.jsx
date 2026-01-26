import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const categories = [
          "kits", "men", "kids", "bestsellers",
          "training", "apparel", "memorabilia", "gifts"
        ];

        const promises = categories.map(category =>
          fetch(`http://localhost:3000/${category}`)
            .then(res => res.json())
            .then(data => {
              if (Array.isArray(data)) {

                return data.map(item => ({ ...item, sourceCategory: category }));
              }
              return [];
            })
            .catch(() => [])
        );

        const results = await Promise.all(promises);
        const flatList = results.flat();
        setAllProducts(flatList);
      } catch (error) {
        console.error("Xəta:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = allProducts.filter(product =>
        product.name && product.name.toLowerCase().includes(lowerQuery)
      );
      setFilteredProducts(filtered);
    }
  }, [query, allProducts]);

  return (
    <div className="w-full min-h-screen bg-white pt-10 px-4 md:px-12">
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative flex items-center border-b-2 border-blue-900 pb-2">
          <HiMagnifyingGlass className="text-2xl text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Axtarış... (Kit, Home, Men)"
            className="w-full text-xl outline-none text-[#0b0f2f] placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="text-center">Yüklənir...</p>}

      {!loading && query && filteredProducts.length === 0 && (
        <p className="text-center text-gray-600">Nəticə tapılmadı.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {filteredProducts.map((product, index) => {


          const safeCategory = product.sourceCategory || "kits";

          return (
            <div key={`${product.id}-${index}`} className="group relative cursor-pointer border p-2 rounded hover:shadow-lg transition">
              <Link to={`/product/${safeCategory}/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">{safeCategory}</p>
                  <h3 className="text-[15px] font-bold text-[#0b0f2f] group-hover:underline">
                    {product.name}
                  </h3>
                  <p className="text-blue-900 font-bold">{product.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;