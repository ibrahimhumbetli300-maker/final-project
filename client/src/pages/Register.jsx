import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();
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
      alert(t('fill_all_fields'));
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
        alert(t('account_created'));
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
      alert(t('error_occurred'));
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
            BARÇA <span className="font-light">{t('official_store')}</span>
          </h1>
          <p className="text-sm text-gray-600">{t('spotify_camp_nou')}</p>
        </div>

        <p className="text-sm mb-6">
          {t('enter_data_create_account')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="text-sm font-medium">{t('first_name')} *</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t('first_name')}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">{t('last_name')} *</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t('last_name')}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">{t('email')} *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('email')}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">{t('password')} *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t('password')}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 font-semibold rounded-md text-center"
          >
            {t('create')}
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-6">
          {t('privacy_policy_accept')}
        </p>

        <a href="/login" className="block mt-6 font-semibold underline text-center">
          {t('log_in')}
        </a>
      </div>
    </div>
  );
}

export default Register;