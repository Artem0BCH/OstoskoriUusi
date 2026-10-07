import { useState } from "react";
import { useCart } from "./CartContext.jsx";

function Additem() {
    const [inputValue, setInputValue] = useState("");
    const { addItem } = useCart();

    function handleSubmit(event) {
        event.preventDefault();

        if (inputValue.trim() === "") {
            return;
        }

        const newItem = {
            id: crypto.randomUUID(),
            text: inputValue,
        };

        addItem(newItem);
        setInputValue("");
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Kirjoita ostos"
                value={inputValue}
                onChange={handleChange}
            />

            <button type="submit">Lisää</button>
        </form>
    );
}

export default Additem;
