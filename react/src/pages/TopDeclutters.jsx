import React from "react"
import SELLERS from '../db.json'
import SellerPost from "../components/SellerPost";


function TopDeclutters() {
    return <> {SELLERS.map(seller => <ul><SellerPost seller={seller} /></ul>)} </>
}


export default TopDeclutters;