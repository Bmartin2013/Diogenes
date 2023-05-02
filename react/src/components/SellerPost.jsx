import React from "react"
import DeclutterSummary from "./ProfileSummary"
import StuffProfile from "./ItemProfile"
import './SellerPost.scss'


function SellerPost({ seller }) {
    const { name, url, stuff, address } = seller

    return <>
        {stuff.map(item => 
        <article className="cnt-seller-post">
            <DeclutterSummary name={name} img={url} address={address} />
            <StuffProfile item={item} />
        </article>)}
    </>
}

export default SellerPost;