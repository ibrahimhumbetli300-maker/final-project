import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email və password boş ola bilməz");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/users?email=${formData.email}&password=${formData.password}`
      );
      const data = await res.json();

      if (data.length > 0) {
   
        localStorage.setItem("user", JSON.stringify(data[0]));

        navigate("/");
      } else {
        alert("Email və ya password səhvdir ");
      }
    } catch (error) {
      console.error(error);
      alert("Server xətası");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md text-center px-6">
        <div className="flex flex-col items-center mb-6">
           <img
            src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
            alt="Barcelona Logo"
            className="w-25 h-25"
          />
          <h1 className="text-xl font-semibold">
            BARÇA <span className="font-light">Official Store</span>
          </h1>
          <p className="text-sm text-gray-600">Spotify Camp Nou</p>
        </div>

        <p className="text-sm mb-6">Enter your login information</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 font-semibold rounded-md"
          >
            SIGN IN
          </button>
        </form>

        <a
          href="/register"
          className="block mt-6 font-semibold underline text-center"
        >
          CREATE ACCOUNT
        </a>
      </div>
    </div>
  );
}

export default Login;
