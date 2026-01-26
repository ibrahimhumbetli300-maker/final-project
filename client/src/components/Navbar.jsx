import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useBasket } from "../context/BasketContext";

const IMAGE_BASE_URL = "http://localhost:3000";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { getBasketCount } = useBasket();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const navLinks = [
    { title: "Best Sellers", path: "/best-sellers" },
    { title: "Kits", path: "/kits" },
    { title: "Training", path: "/training" },
    { title: "Apparel", path: "/apparel" },
    { title: "Memorabilia", path: "/memorabilia" },
    { title: "Gifts and Accessories", path: "/gifts" },
  ];

  useEffect(() => {
    const categories = [
      "bestsellers",
      "kits",
      "training",
      "apparel",
      "memorabilia",
      "gifts",
      "men",
      "kids",
    ];

    const promises = categories.map((category) =>
      fetch(`http://localhost:3000/${category}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            return data.map((item) => ({ ...item, sourceCategory: category }));
          }
          return [];
        }),
    );

    Promise.all(promises)
      .then((data) => setAllProducts(data.flat()))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setFilteredResults([]);
    } else {
      setFilteredResults(
        allProducts
          .filter((item) =>
            item.name?.toLowerCase().includes(value.toLowerCase()),
          )
          .slice(0, 5),
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredResults.length > 0) {
      const item = filteredResults[0];
      navigate(`/product/${item.sourceCategory}/${item.id}`);
      setShowSearch(false);
      setSearchTerm("");
    }
  };

  const getImageSrc = (item) => {
    const img = item.image || item.img || item.thumbnail || item.images?.[0];
    if (!img) return "https://via.placeholder.com/80x80?text=No+Image";
    return img.startsWith("http") ? img : `${IMAGE_BASE_URL}${img}`;
  };

  return (
    <header className="bg-[#0b0f2f] text-white relative z-[100]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
            alt="Logo"
            className="w-12 h-12"
          />
          <span className="font-bold text-xl">
            BARÇA
            <span className="block text-[10px] font-normal uppercase">
              Official Store
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex h-full items-center gap-8 text-[13px] font-bold uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `h-full flex items-center border-b-2 ${
                  isActive
                    ? "border-yellow-400 text-white"
                    : "border-transparent text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5 relative">
          <div className="relative">
            <FaSearch
              size={18}
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => setShowSearch(!showSearch)}
            />

            {showSearch && (
              <div className="absolute top-10 right-0 w-72 bg-[#0b0f2f] border border-gray-800 rounded p-3">
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  placeholder="Axtarın..."
                  className="w-full px-3 py-2 bg-[#0f153d] text-sm rounded outline-none"
                />

                {searchTerm && (
                  <div className="mt-2">
                    {filteredResults.length ? (
                      filteredResults.map((item) => (
                        <Link
                          key={item.id}
                          to={`/product/${item.sourceCategory}/${item.id}`}
                          onClick={() => {
                            setShowSearch(false);
                            setSearchTerm("");
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-[#1a204d]"
                        >
                          <img
                            src={getImageSrc(item)}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div>
                            <p className="text-xs font-bold line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-yellow-400">
                              {item.price} AZN
                            </p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400 text-center p-2">
                        Nəticə tapılmadı
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative hidden lg:block">
            <FaUser
              size={18}
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => setOpenUser(!openUser)}
            />

            {openUser && (
              <div className="absolute right-0 mt-2 w-40 bg-[#0b0f2f] border border-gray-700 rounded">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <Link to="/basket" className="relative hover:text-yellow-400">
            <FaShoppingBag size={18} />
            {getBasketCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-[10px] px-1.5 rounded-full">
                {getBasketCount()}
              </span>
            )}
          </Link>

          <div className="lg:hidden">
            {mobileMenu ? (
              <FaTimes size={20} onClick={() => setMobileMenu(false)} />
            ) : (
              <FaBars size={20} onClick={() => setMobileMenu(true)} />
            )}
          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden bg-[#0b0f2f] border-t border-gray-800 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenu(false)}
              className="block text-sm font-bold uppercase text-gray-300 hover:text-yellow-400"
            >
              {link.title}
            </NavLink>
          ))}

          <div className="border-t border-gray-700 pt-4 space-y-2">
            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="block"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenu(false)}
              className="block"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
