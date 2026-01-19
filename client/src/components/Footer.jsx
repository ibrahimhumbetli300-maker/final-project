import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <div className="footer w-full h-16 bg-blue-900 text-white flex items-center justify-center text-sm">
      <p>&copy; 2026 FC Barcelona Official Store.</p>

      <div className="icon social-grid flex items-center ml-4 gap-4">
        <a
          href="https://www.facebook.com/fcbarcelona/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-blue-400 transition"
        >
          <FaFacebook size={20} />
        </a>

        <a
          href="https://www.instagram.com/fcbarcelona/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-pink-400 transition"
        >
          <AiFillInstagram size={22} />
        </a>

        <a
          href="https://x.com/fcbarcelona_es"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-sky-400 transition"
        >
          <AiFillTwitterCircle size={24} />
        </a>

        <a
          href="https://www.tiktok.com/@fcbarcelona"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-blue-800 transition"
        >
          <AiFillTikTok size={24} />
        </a>

        <a
          href="https://www.youtube.com/fcbarcelona"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-red-500 transition"
        >

            <FaYoutube size={24} />
        </a>

      
       <a
          href="https://open.spotify.com/user/31gorrj76f2m3wczoifm6f6tbn3q?si=a20bf0c076684729&nd=1"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-green-500 transition"
        >

            <FaSpotify size={24} />
        </a>



      </div>
    </div>
  );
};

export default Footer;
