import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';


export default function Navbar() {

    const [showicons, setshowicons] = useState(false)
    const { users, setusers, verifyuser, setverifyuser } = useAuth();
    const nav = useNavigate()
    const { cartitems, setcartitems } = useCart();
    const [itemstotal, setitemstotal] = useState();


    useEffect(() => {
        const totalitems = cartitems.reduce((accu, items) => accu + items.proquantity, 0);
        setitemstotal(totalitems);
    }, [cartitems]);


    function show() {
        setshowicons(!showicons)
    }
    function logout() {
        setverifyuser(false)
        nav('/login')
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
                    <h1 className='text-xl font-bold'>LeatherTech <br /> Oasis</h1>
                    <ul className='flex  justify-between gap-x-8 '>
                        <a href="" className=' mt-1 list'><Link to='/'><li className=' text-lg font-bold '>HOME</li></Link></a>
                        <a href="" className=' mt-1 list'><li className=' text-lg font-bold '>ABOUT</li></a>
                        <a href="" className=' mt-1 list'><Link to="/products"><li className=' text-lg font-bold '>PRODUCTS</li></Link></a>
                        <a href="" className=' mt-1 list'><Link to="/myorder"><li className=' text-lg font-bold '>MY ORDERS</li></Link></a>
                    </ul>
                    {verifyuser ? (
                        <div className='flex justify-between w-[10vw]'>
                            <i className="fa-regular fa-user cursor-pointer icon" style={{ fontSize: "25px" }} onClick={() => nav('/profile')}></i>
                            <div className='relative'>
                                <i className="fa-solid fa-cart-shopping cursor-pointer icon" style={{ fontSize: "25px" }} onClick={() => { nav('/cart') }}></i>
                                <h1 className=' bg-red-700 px-1 rounded-full absolute top-[-30%] left-[-30%] text-white'>{itemstotal}</h1>
                            </div>
                            <i className="fa-solid fa-right-from-bracket cursor-pointer icon" style={{ fontSize: "25px" }} onClick={logout}></i>
                        </div>
                    ) : (

                        <Link to="/login">
                            <form action="" className='relative loginbt rounded-xl'>
                                <input type="submit" value="Login" className='text-lg px-4 py-2 cursor-pointer pl-12' />
                                <i className="fa-regular fa-circle-user absolute left-3 top-1/2 transform -translate-y-1/2" style={{ fontSize: "20px" }}></i>
                            </form>
                        </Link>

                    )}
                </div>
            </div>
            <div className='mob bg-gray-100 px-10 py-3 fixed top-0 left-0 right-0 z-10 w-full'>
                <div className='flex justify-between items-center'>

                    <i class="fa-solid fa-bars cursor-pointer baricon" style={{ fontSize: "18px" }} onClick={show}></i>
                    <h1 className='text-lg font-bold'>LeatherTech Oasis</h1>
                    {verifyuser ? (
                        <div className='flex justify-between w-[20vw] sm:w-[10vw]'>
                            <i className="fa-regular fa-user cursor-pointer icon" style={{ fontSize: "18px" }} onClick={() => nav('/profile')}></i>
                            <i className="fa-solid fa-cart-shopping cursor-pointer icon" style={{ fontSize: "18px" }} onClick={() => { nav('/cart') }}></i>
                            <i className="fa-solid fa-right-from-bracket cursor-pointer icon" style={{ fontSize: "18px" }} onClick={logout}></i>
                        </div>
                    ) : (
                        <Link to="/login">
                            <form action="" className='relative loginbt rounded-xl'>
                                <input type="submit" value="Login" className='text-lg px-4 py-1 cursor-pointer pl-12' />
                                <i className="fa-regular fa-circle-user absolute left-3 top-1/2 transform -translate-y-1/2" style={{ fontSize: "18px" }}></i>
                            </form>
                        </Link>

                    )}
                </div>
            </div >


            {showicons && (
                <div className={`mobilemenu ${showicons ? 'show-menu' : ''}`}>
                    <i class="fa-solid fa-xmark cursor-pointer relative top-8 left-10 baricon" style={{ fontSize: "30px" }} onClick={show}></i>
                    <h1 className='text-xl font-bold text-center'>LEATHERTECH <br /> OASIS</h1>
                    <div className='w-full h-screen  px-4 text-center mt-5'>
                        <ul className=''>
                            <Link to="/"><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show}>HOME</li></Link>
                            <Link to="/"><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show}>ABOUT</li></Link>
                            <Link to="/products"><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show}>PRODUCTS</li></Link>
                            <Link to="/myorder"><li className='py-4 text-lg cursor-pointer font-medium moblist' onClick={show}>MY ORDERS</li></Link>

                        </ul>
                    </div>
                </div>
            )}


        </>
    )
}

