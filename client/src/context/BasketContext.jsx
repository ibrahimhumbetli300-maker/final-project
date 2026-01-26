import React, { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    
    const [basket, setBasket] = useState(() => {
        const savedBasket = localStorage.getItem("basket");
        return savedBasket ? JSON.parse(savedBasket) : [];
    });

 
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const existingItem = prevBasket.find((item) => item.id === product.id);
            if (existingItem) {
                return prevBasket.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevBasket, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromBasket(productId);
            return;
        }
        setBasket((prevBasket) =>
            prevBasket.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearBasket = () => {
        setBasket([]);
    };

    const getBasketTotal = () => {
        return basket.reduce((total, item) => {
            const price = typeof item.price === 'string'
                ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
                : typeof item.price === 'number' ? item.price : 0;
            return total + (price || 0) * item.quantity;
        }, 0).toFixed(2);
    };

    const getBasketCount = () => {
        return basket.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <BasketContext.Provider
            value={{
                basket,
                addToBasket,
                removeFromBasket,
                updateQuantity,
                clearBasket,
                getBasketTotal,
                getBasketCount,
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("useBasket must be used within a BasketProvider");
    }
    return context;
};
