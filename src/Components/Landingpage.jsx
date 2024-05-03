import React from 'react'
import Navbar from "./Landing Page/Navbar"
import Hero from "./Landing Page/Hero"
import Categories from "./Landing Page/Categories"
import SmartPhones from "./Landing Page/SmartPhones"
import Featured from "./Landing Page/Featured"
import Footer from "./Landing Page/Footer"
import Service from './Landing Page/Service'




function Landingpage() {
    return (
        <>

            <Hero />
            <Categories />
            <SmartPhones />
            <Featured />
            <Service />
            <Footer />

        </>
    )
}

export default Landingpage;
