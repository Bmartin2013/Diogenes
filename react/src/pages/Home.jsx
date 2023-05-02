import React from "react"
import Banner from '../components/Banner'
import FeaturedItems from '../components/FeaturedItems'
import SELLERS from '../db.json'

function Home() {
    return (<>
        <Banner />
        <FeaturedItems title={"Top Declutters"} subtitle={"Our starred trashure sellers"} items={SELLERS} />
        <FeaturedItems title={"New items"} subtitle={"Fresh stuff from your closet"} items={SELLERS[0].stuff} />
    </>)
}

export default Home;