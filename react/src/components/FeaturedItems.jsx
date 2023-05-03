import React from "react"
import "./_FeaturedItems"

const FeaturedItems = ({ title, subtitle, items }) => (
    <article>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <ul className="cnt-featured-items">
            {items.map((item) => <_FeaturedItem key={item.name}  {...item} />)}
        </ul>
    </article>
)


const _FeaturedItem = ({ name, url }) => (
    <li>
        <img src={url} alt={name} />
        <strong>{name}</strong>
    </li>
)

export default FeaturedItems;