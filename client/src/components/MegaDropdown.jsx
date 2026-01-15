const MegaDropdown = ({ type }) => {
  // Tüm menüler için 5 sütunlu sabit yapı
  const menuConfigs = {
    kits: [
      { title: "Home Kit", items: ["Men", "Kids and Babies", "Women"] },
      { title: "Away Kit", items: ["Men", "Kids and Babies", "Women"] },
      {
        title: "Third Kit",
        items: ["Men", "Kids and Babies", "Women"],
       
      },
     
    ],
    training: [
      { title: "Men", items: ["JACKETS AND SWEATSHIRTS", "T-SHIRTS"] },
      { title: "Kids and Babies", items: ["JACKETS AND SWEATSHIRTS", "T-SHIRTS"] },
      { title: "Women", items: ["JACKETS AND SWEATSHIRTS", "T-SHIRTS"] },
      { title: "", items: [] }, 
    ],
    apparel: [
      { title: "Men", items: ["Hoodies and Sweaters", "T-Shirts and Polos"] },
      { title: "Kids and Babies", items: ["Hoodies and Sweaters", "T-Shirts and Polos"] },
      { title: "Women", items: ["Hoodies and Sweaters", "T-Shirts and Polos"] },
      
     
    ],
    memorabilia: [
      { title: "Signed Memorabilia", items: [""] },
      { title: "Stadium Memorabilia", items: [""] },
      { title: "Diamonds", items: [""] },
    
    ],
    gifts: [
      { title: "Accessories", items: ["Backpacks and Bags", "Headwear", "Socks"] },
      { title: "Souvenirs", items: ["Scarves and Flags", "Balls", "Keyrings and Magnets", "Games"] },
      { title: "Homewear", items: ["Bottles and mugs", "Home Accesories", "Office and Stationary"] },
    ],
  };

  const columns = menuConfigs[type] || [];

  return (
    <div className="w-full bg-[#0b0f2f] text-white py-12 min-h-[350px]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Sabit 5 Sütunlu Grid */}
        <div className="grid grid-cols-5 gap-12 text-[13px] uppercase tracking-wider">
          {columns.map((col, index) => (
            <div key={index} className="flex flex-col gap-8">
              {/* Ana Kategori */}
              {col.title && (
                <div className="space-y-4">
                  <h4 className="font-black text-white">{col.title}</h4>
                  <ul className="space-y-3 text-gray-400 font-bold">
                    {col.items.map((item, i) => (
                      <li
                        key={i}
                        className="hover:text-yellow-400 cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Eğer Third/Fourth Kit gibi alt alta iki başlık varsa */}
              {col.extra && (
                <div className="space-y-4">
                  <h4 className="font-black text-white">{col.extra.title}</h4>
                  <ul className="space-y-3 text-gray-400 font-bold">
                    {col.extra.items.map((eItem, ei) => (
                      <li
                        key={ei}
                        className="hover:text-yellow-400 cursor-pointer transition-colors"
                      >
                        {eItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
