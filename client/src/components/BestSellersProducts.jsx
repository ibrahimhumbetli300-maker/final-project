const BestSellersProducts = () => {
  return (
    <section className="bg-[#0b0f2f] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-10 text-center">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="/images/product1.png"
              alt="product"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Barcelona Jersey</h3>
              <p className="text-gray-600">$99</p>
            </div>
          </div>

          {/* burdan aşağı məhsulları map ilə çoxalda bilərsən */}
        </div>
      </div>
    </section>
  );
};

export default BestSellersProducts;
