import React from "react"
import "./FeaturedItems.scss"

function FeaturedItems({ title, subtitle, items }) {
    return (
        <article>
            <div className="cnt-header">
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </div>
            <div className="cnt-top-banner">
                {items.map((item) => < FeaturedItem key={item.name}  {...item} />)}
            </div>
        </article>)
}


function FeaturedItem({ name, url }) {
    return (<div className="top-box">
        <img src={url} alt={name} />
        <strong>{name}</strong>
    </div>)
}

export default FeaturedItems;