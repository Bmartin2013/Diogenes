import React from "react"
import SELLERS from '../db.json'
import SellerFeed from "../components/SellerPost";


function TopDeclutters() {
    return <> {SELLERS.map(seller => <SellerFeed seller={seller} />)} </>
}


export default TopDeclutters;