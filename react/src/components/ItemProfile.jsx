import React from "react";
import './_ItemProfile'

function calculateNextPrice(price) {
    return price > 0 && price - 10;
}

const ItemProfile = ({ name, url, price, description }) => (
    <div className="cnt-item-profile">
        <img src={url} alt={name} />
        <strong> Item:&nbsp;{name} &nbsp; Price:${price}</strong>
        <p>{description}</p>
        <div className="cnt-purchase-actions">
            <button>Purchase</button>
            <button>Lower down to {calculateNextPrice(price)}</button>
            <button>add to cart</button>
            <button>Save</button>
        </div>
    </div>);

export default ItemProfile;