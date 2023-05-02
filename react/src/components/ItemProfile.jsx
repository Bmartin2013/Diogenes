import React from "react";
import './ItemProfile.scss'

function calculateNextPrice(price) {
    return price > 0 && price - 10;
}

function ItemProfile({ item }) {
    return (
        <div className="cnt-item-profile">
            <img src={item.url} alt={item.name} />
            <strong> Item:&nbsp;{item.name} &nbsp; Price:${item.price}</strong>
            <p>{item.description}</p>
            <div className="cnt-purchase-actions">
                <button>Purchase</button>
                <button>Lower down to {calculateNextPrice(item.price)}</button>
                <button>add to cart</button>
                <button>Save</button>
            </div>
        </div>);
}

export default ItemProfile;