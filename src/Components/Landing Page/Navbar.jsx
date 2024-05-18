import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import { Authentication } from '../../Context/AuthContext';
import Aos from 'aos';
import { duration } from '@mui/material';
import 'aos/dist/aos.css';


export default function Navbar() {

    const [showicons, setshowicons] = useState(false)
    const { users, setusers, verifyuser, setverifyuser } = useAuth();
    const { loading, setLoading } = useContext(Authentication);
    const nav = useNavigate()
    const { cartitems, setcartitems } = useCart();
    const [itemstotal, setitemstotal] = useState();


    useEffect(() => {
        const totalitems = cartitems.reduce((accu, items) => accu + items.proquantity, 0);
        setitemstotal(totalitems);
        Aos.init({ duration: 1000 })
    }, [cartitems]);


    function show() {
        setshowicons(!showicons)
    }
    function logout() {
        setverifyuser(false)
        nav('/login')
    }
    function navigatetocart() {
        nav('/cart')
        setLoading(true)
    }


    function toggleBackdropFilter() {
        var desktop = document.getElementById('desktop');
        if (window.scrollY > 0) {
            desktop.classList.add('backdrop-filter-on');
        } else {
            desktop.classList.remove('backdrop-filter-on');
        }
    }


    window.addEventListener('scroll', toggleBackdropFilter);

    return (
        <>
            <div className='desktop px-20 py-2  fixed top-0 left-0 right-0 z-10 ' id='desktop'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold' data-aos='fade-right'>LeatherTech <br /> Oasis</h1>
                    <ul className='flex  justify-between gap-x-8 '>
                        <a href="" className=' mt-1 list'><Link to='/' onClick={() => setLoading(true)}><li className=' text-lg font-bold ' data-aos="fade-up">HOME</li></Link></a>
                        <a href="" className=' mt-1 list'><li className=' text-lg font-bold ' data-aos="fade-up">ABOUT</li></a>
                        <a href="" className=' mt-1 list'><Link to="/products" onClick={() => setLoading(true)}><li className=' text-lg font-bold ' data-aos="fade-up">PRODUCTS</li></Link></a>
                        <a href="" className=' mt-1 list'><Link to="/myorder" onClick={() => setLoading(true)}><li className=' text-lg font-bold ' data-aos="fade-up">MY ORDERS</li></Link></a>
                    </ul>
                    {verifyuser ? (
                        <div className='flex justify-between w-[10vw]'>
                            <i className="fa-regular fa-user cursor-pointer icon" style={{ fontSize: "25px" }} onClick={() => nav('/profile')} data-aos="fade-up"></i>
                            <div className='relative' data-aos="fade-up">
                                <i className="fa-solid fa-cart-shopping cursor-pointer icon" style={{ fontSize: "25px" }} onClick={navigatetocart} ></i>
                                <h1 className=' bg-red-700 px-1 rounded-full absolute top-[-30%] left-[-30%] text-white'>{itemstotal}</h1>
                            </div>
                            <i className="fa-solid fa-right-from-bracket cursor-pointer icon" style={{ fontSize: "25px" }} onClick={logout} data-aos="fade-up"></i>
                        </div>
                    ) : (

                        <Link to="/login">
                            <form action="" className='relative loginbt rounded-xl' data-aos="fade-left">
                                <input type="submit" value="Login" className='text-lg px-4 py-2 cursor-pointer pl-12' />
                                <i className="fa-regular fa-circle-user absolute left-3 top-1/2 transform -translate-y-1/2" style={{ fontSize: "20px" }}></i>
                            </form>
                        </Link>

                    )}
                </div>
            </div>
            <div className='mob bg-gray-100 px-3 py-3  z-10 w-[100vw]'>
                <div className='flex justify-between items-center'>

                    <i class="fa-solid fa-bars cursor-pointer baricon" style={{ fontSize: "18px" }} onClick={show} data-aos="fade-right"></i>
                    <h1 className='text-md sm:text-lg font-bold' data-aos="fade-right">LeatherTech Oasis</h1>
                    {verifyuser ? (
                        <div className='flex justify-between w-[20vw] sm:w-[10vw]'>
                            <i className="fa-regular fa-user cursor-pointer icon" style={{ fontSize: "18px" }} onClick={() => nav('/profile')} data-aos="fade-up"></i>
                            <div className='relative' data-aos="fade-up">
                                <i className="fa-solid fa-cart-shopping cursor-pointer icon" style={{ fontSize: "18px" }} onClick={navigatetocart} ></i>
                                <h1 className=' bg-red-700 px-1 text-sm rounded-full absolute top-[-30%] left-[-30%] text-white'>{itemstotal}</h1>
                            </div>
                            <i className="fa-solid fa-right-from-bracket cursor-pointer icon" style={{ fontSize: "18px" }} onClick={logout} data-aos="fade-up"></i>
                        </div>
                    ) : (
                        <Link to="/login">
                            <form action="" className='relative loginbt rounded-xl' data-aos="fade-left">
                                <input type="submit" value="Login" className='text-lg px-4 py-1 cursor-pointer pl-12' />
                                <i className="fa-regular fa-circle-user absolute left-3 top-1/2 transform -translate-y-1/2" style={{ fontSize: "18px" }}></i>
                            </form>
                        </Link>

                    )}
                </div>
            </div >


            {showicons && (
                <div className='mobilemenu' data-aos="fade-right">
                    <i class="fa-solid fa-xmark cursor-pointer relative top-8 left-10 baricon" style={{ fontSize: "30px" }} onClick={show} data-aos="fade-right"></i>
                    <h1 className='text-xl font-bold text-center' data-aos="fade-right">LEATHERTECH <br /> OASIS</h1>
                    <div className='w-full h-screen  px-4 text-center mt-5'>
                        <ul className=''>
                            <Link to="/" onClick={() => setLoading(true)}><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show} data-aos="fade-up">HOME</li></Link>
                            <Link to="/" onClick={() => setLoading(true)}><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show} data-aos="fade-up">ABOUT</li></Link>
                            <Link to="/products" onClick={() => setLoading(true)}><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show} data-aos="fade-up">PRODUCTS</li></Link>
                            <Link to="/myorder" onClick={() => setLoading(true)}><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show} data-aos="fade-up">MY ORDERS</li></Link>

                        </ul>
                    </div>
                </div>
            )}


        </>
    )
}

