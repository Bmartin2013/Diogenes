import React from "react"
import "./FeaturedItems.scss"

function FeaturedItems({ title, subtitle, items }) {
    return (
        <section>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <ul className="cnt-featured-items-widget">
                {items.map((item) => <FeaturedItem key={item.name}  {...item} />)}
            </ul>
        </section>)
}


function FeaturedItem({ name, url }) {
    return (
        <li className="item-info">
            <img src={url} alt={name} />
            <strong>{name}</strong>
        </li>)
}

export default FeaturedItems;