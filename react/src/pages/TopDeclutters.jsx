import React from "react"
import SELLERS from '../db.json'
import SellerPost from "../components/SellerPost";

const TopDeclutters = () => SELLERS.map(seller => <ul><SellerPost {...seller} /></ul>);

export default TopDeclutters;