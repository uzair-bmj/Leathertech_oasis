import React from 'react';
import Navbar from "./Landing Page/Navbar";
import Hero from "./Landing Page/Hero";
import Categories from "./Landing Page/Categories";
import SmartPhones from "./Landing Page/SmartPhones";
import Featured from "./Landing Page/Featured";
import Footer from "./Landing Page/Footer";
import Service from './Landing Page/Service';
import Spinner from './Spinner';
import useAuth from '../Hooks/useAuth';

function Landingpage() {
    const { loading } = useAuth();

    return (
        <>
            <div className='w-full bg-gray-300'>
                {loading ? <Spinner /> : (
                    <>

                        <Navbar />
                        <Hero />
                        <Categories />
                        <SmartPhones />
                        <Featured />
                        <Service />
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
}

export default Landingpage;
