import React from "react"
import ProfileSummary from "./ProfileSummary"
import ItemProfile from "./ItemProfile"
import './_SellerPost'


const SellerPost = ({ name, url, stuff, address }) => (stuff.map(item =>
    <li className="cnt-seller-post">
        <ProfileSummary name={name} img={url} address={address} />
        <ItemProfile {...item} />
    </li>))

export default SellerPost;