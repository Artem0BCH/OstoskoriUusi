import { useCart } from "./CartContext.jsx";

function ItemList() {
    const { items, removeItem } = useCart();

    return (
        <ul className="list">
            {items.map((item) => (
                <li key={item.id} onClick={() => removeItem(item.id)}>
                    {item.text}
                </li>
            ))}
        </ul>
    );
}

export default ItemList;
