import React from "react";
import { useBasket } from "../context/BasketContext";
import { HiTrash } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedProduct } from "../hooks/useLocalizedProduct";

const Basket = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { getLocalizedProducts } = useLocalizedProduct();

  const {
    basket,
    removeFromBasket,
    updateQuantity,
    getBasketTotal,
    clearBasket,
  } = useBasket();

  const localizedBasket = getLocalizedProducts(basket);

  if (basket.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-[#0b0f2f] mb-4">
          {t('basket_empty')}
        </h2>
        <p className="text-gray-600 mb-8">
          {t('empty_basket_msg')}
        </p>
        <Link
          to="/"
          className="bg-[#0b0f2f] text-white px-8 py-3 rounded font-bold hover:bg-yellow-500 hover:text-black transition-colors"
        >
          {t('start_shopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#0b0f2f] mb-8 border-b-2 border-gray-200 pb-4">
          {t('your_basket')} ({basket.length} {t('items')})
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 space-y-6">
            {localizedBasket.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-blue-900 font-bold">{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100 text-gray-600 cursor-pointer disabled:opacity-30"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-medium text-gray-800 border-x border-gray-300 min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromBasket(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <HiTrash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 h-fit bg-white p-8 rounded-lg shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-[#0b0f2f] mb-6">
              {t('order_summary')}
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>{t('subtotal')}</span>
                <span>${getBasketTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{t('shipping')}</span>
                <span>{t('shipping_msg')}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-8">
              <div className="flex justify-between text-xl font-bold text-[#0b0f2f]">
                <span>{t('total')}</span>
                <span>${getBasketTotal()}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-[#0b0f2f] text-white py-4 rounded font-bold hover:bg-yellow-500 hover:text-black transition-colors uppercase tracking-wider mb-4 cursor-pointer"
            >
              {t('checkout')}
            </button>

            <button
              onClick={clearBasket}
              className="w-full text-gray-500 text-sm underline hover:text-red-500 transition-colors cursor-pointer"
            >
              {t('clear_basket')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;