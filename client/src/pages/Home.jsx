import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import "../../../client/src/index.css";

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/training");
  };

  const handleShopNow2 = () => {
    navigate("/kits");
  };

  const handleShopNow3 = () => {
    navigate("/best-sellers");
  };

  const handleMen = () => {
    navigate("/men");
  };

  const handleKids = () => {
    navigate("/kids");
  };

  return (
    <div className="w-full gap-3 flex flex-col home-page">
      <section
        className="relative w-full h-[80vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://store.fcbarcelona.com/cdn/shop/files/4x5_Supercopa2026_KV.jpg?v=1768166739&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-3xl tracking-widest text-yellow-300 mb-2">
            SUPERCOPA
          </h2>

          <h1 className="text-2xl md:text-5xl text-yellow-400 font-extrabold mb-6">
            CHAMPIONS
          </h1>

          <button
            onClick={handleShopNow}
            className="bg-yellow-500 text-black px-8 py-3 cursor-pointer font-bold rounded hover:bg-[#0b0f2f] hover:text-white transition  flex items-center gap-2"
          >
            SHOP NOW TRAINING <HiArrowRight />
          </button>
        </div>
      </section>

      <section
        className="relative w-full h-[80vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://store.fcbarcelona.com/cdn/shop/files/player_kits_4a_frontal.jpg?v=1763730336&width=3840')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-2xl md:text-5xl text-white font-extrabold mb-13">
            FC BARCELONA KITS
          </h1>

          <button
            onClick={handleShopNow2}
            className="bg-yellow-500 text-black px-8 py-3 cursor-pointer font-bold rounded hover:bg-[#0b0f2f] hover:text-white transition  flex items-center gap-2"
          >
            SHOP NOW KITS <HiArrowRight />
          </button>
        </div>
      </section>

      <section className="w-full bg-[#0b0f2f] py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div
            onClick={handleMen}
            className="relative h-[70vh] rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src="https://store.fcbarcelona.com/cdn/shop/files/Bolet_Baixa-12457_dfe85d7a-4528-478b-a3e8-1fab6c163fce.jpg?v=1768303039&width=1420 height=900"
              alt="Men Apparel"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <h2 className="absolute bottom-6 left-6 text-white text-3xl font-extrabold tracking-widest">
              MEN'S APPAREL
            </h2>
          </div>

          <div
            onClick={handleKids}
            className="relative h-[70vh] rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src="https://store.fcbarcelona.com/cdn/shop/files/Bolet_Baixa-9495.jpg?v=1768303071&width=1420"
              alt="Kids Apparel"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <h2 className="absolute bottom-6 left-6 text-white text-3xl font-extrabold tracking-widest">
              KIDS APPAREL
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden py-4 my-6 border-t-2 border-b-2 border-white bg-transparent  flex">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-12 text-5xl font-extrabold tracking-widest bg-gradient-to-r from-red-600 via-pink-400 to-blue-700 bg-clip-text text-transparent">
            MES QUE UN CLUB <span> &#11044;</span>
          </span>
          <span className="mx-12 text-5xl font-extrabold tracking-widest bg-gradient-to-r from-red-600 via-pink-400 to-blue-700 bg-clip-text text-transparent">
            MES QUE UN CLUB <span> &#11044;</span>
          </span>
          <span className="mx-12 text-5xl font-extrabold tracking-widest bg-gradient-to-r from-red-600 via-pink-400 to-blue-700 bg-clip-text text-transparent">
            MES QUE UN CLUB <span> &#11044;</span>
          </span>
          <span className="mx-12 text-5xl font-extrabold tracking-widest bg-gradient-to-r from-red-600 via-pink-400 to-blue-700 bg-clip-text text-transparent">
            MES QUE UN CLUB <span className="logo"> &#11044;</span>
          </span>
        </div>
      </section>

      <section
        className="relative w-full h-[80vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://store.fcbarcelona.com/cdn/shop/files/Diseno_sin_titulo_2_efec66c0-ab13-4660-b069-69afa2ca047a.png?v=1768218038&width=3000')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-2xl md:text-5xl text-white font-extrabold mb-13">
            BEST SELLERS
          </h1>

          <button
            onClick={handleShopNow3}
            className="bg-yellow-500 text-black px-8 py-3 cursor-pointer font-bold rounded hover:bg-[#0b0f2f] hover:text-white transition  flex items-center gap-3"
          >
            SHOP NOW BEST SELLERS <HiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
