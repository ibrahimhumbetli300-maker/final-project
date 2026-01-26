import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { basket, getBasketTotal, clearBasket } = useBasket();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 

    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    setFormData({ ...formData, expiry: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log("Sifariş məlumatları:", formData);

  
    clearBasket();

  
    navigate("/success");
  };

  if (basket.length === 0) {
    navigate("/basket");
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0b0f2f] mb-8 border-b pb-4">
          CHECKOUT
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-10"
        >
         
          <div className="lg:w-2/3 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#0b0f2f] mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border p-3 rounded w-full focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border p-3 rounded w-full focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border p-3 rounded w-full md:col-span-2 focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#0b0f2f] mb-6">
                Shipping Address
              </h2>
              <div className="space-y-4">
                <input
                  required
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  className="border p-3 rounded w-full focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="City"
                  className="border p-3 rounded w-full focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#0b0f2f] mb-6">
                Payment Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="border p-3 rounded w-full col-span-2 focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  maxLength="5"
                  value={formData.expiry}
                  className="border p-3 rounded w-full focus:outline-none focus:border-blue-900"
                  onChange={handleExpiryChange}
                />
                <input
                  required
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  className="border p-3 rounded w-full focus:outline-none focus:border-blue-900"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

        
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24 border">
              <h2 className="text-xl font-bold text-[#0b0f2f] mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-4 max-h-60 overflow-y-auto pr-2">
                {basket.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm items-center"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        alt=""
                        className="w-10 h-10 object-cover rounded"
                      />
                      <span className="text-gray-700">
                        {item.name} x {item.quantity}
                      </span>
                    </div>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getBasketTotal()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-[#0b0f2f] pt-2">
                  <span>Total</span>
                  <span>${getBasketTotal()}</span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0b0f2f] text-white py-4 rounded font-bold mt-6 hover:bg-opacity-90 transition-all uppercase tracking-widest cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
