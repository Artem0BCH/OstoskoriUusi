import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(newItem) {
        const exists = items.some((item) => item.text === newItem.text);

        if (exists) {
            return;
        }

        setItems([...items, newItem]);
    }

    function removeItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
