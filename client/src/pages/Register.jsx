import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert("Zəhmət olmasa bütün * sahələri doldurun");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          agree: formData.agree,
        }),
      });

      if (res.ok) {
        alert("Account created successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          agree: false,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Xəta baş verdi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md text-center px-6">
      
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
            alt="Barcelona Logo"
            className="w-20 h-20"
          />
          <h1 className="text-xl font-semibold">
            BARÇA <span className="font-light">Official Store</span>
          </h1>
          <p className="text-sm text-gray-600">Spotify Camp Nou</p>
        </div>

        <p className="text-sm mb-6">
          Enter your data to create an account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="text-sm font-medium">First name *</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Last name *</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email *</label>
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
            <label className="text-sm font-medium">Password *</label>
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
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 font-semibold rounded-md text-center"
          >
            CREATE
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-6">
          By creating an account you accept the privacy policy.
        </p>

        <a href="/login" className="block mt-6 font-semibold underline text-center">
          LOG IN
        </a>
      </div>
    </div>
  );
}

export default Register;
