import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";

const Success = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-[#0b0f2f] px-4">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg w-full transform transition-all hover:scale-105 duration-300">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-24 h-24 text-green-500 animate-bounce" />
                </div>
                <h1 className="text-4xl font-extrabold mb-4 animate-fade-in-up">
                    {t("order_success_title")}
                </h1>
                <p className="text-gray-600 text-lg mb-8 animate-fade-in-up delay-100">
                    {t("order_success_msg")}
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-[#0b0f2f] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    {t("return_home")}
                </button>
                <p className="mt-6 text-sm text-gray-400">
                    {t("redirect_msg")}
                </p>
            </div>
        </div>
    );
};

export default Success;
