import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../Landing Page/Navbar"
import Footer from "../Landing Page/Footer"
import useProduct from '../../Hooks/useProduct'
import useCart from '../../Hooks/useCart'
import useAuth from '../../Hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { Authentication } from '../../Context/AuthContext'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Productdetail() {

    const { prodetail, setprodetail } = useProduct()
    const { cartitems, setcartitems } = useCart()
    const { verifyuser, setverifyuser } = useAuth();
    const [loginmodal, setloginmodal] = useState(false)
    const [existingitemmodal, setexistingitemmodal] = useState(false)
    const [cartmsg, setcartmsg] = useState(false)
    const { loading, setLoading } = useContext(Authentication)
    const nav = useNavigate()

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    function pushtocart() {
        if (verifyuser) {
            if (prodetail.length > 0) {
                const product = prodetail[0];
                const existingItem = cartitems.find(item => item.proname === product.prodname);
                if (!existingItem) {
                    const cartobject = {
                        proimg: product.prodimg,
                        proname: product.prodname,
                        proprice: product.prodprice,
                        proquantity: 1,
                    };
                    cartitems.push(cartobject)
                    setcartmsg(true);
                    prodetail.splice(0, 1)
                } else {
                    setexistingitemmodal(true);
                }
            }
            else {
                alert("no item is here")
            }
        } else {
            setloginmodal(true);
        }
    }


    function navtohome() {
        setLoading(true)
        nav('/')
    }


    return (
        <>
            <Navbar />
            <div className=''>

                <div className='md:block hidden '>
                    <div className='absolute top-20 left-16'>
                        <h2 className='price text-lg ' data-aos="fade-right">Back to <Link to="/">home</Link></h2>
                    </div>
                    {
                        prodetail && prodetail.map((items, index) => (
                            <div key={index} className='flex justify-center px-8 py-32 gap-x-20 md:w-[90vw]  lg:w-[70vw] m-auto'>
                                <div className='cursor-pointer rounded-xl shadow-2xl  w-[500px] h-[500px] overflow-hidden bg-gray-300 relative' data-aos = 'fade-right'>
                                    <img src={items.prodimg} alt="" className='w-[500px] h-[500px] opacity-30 rounded-xl shadow-xl detailimg'  />
                                    <img src={items.prodimg} alt="" className='w-[300px] h-[300px] rounded-xl shadow-xl absolute top-[50%] left-[50%] ' style={{ transform: "translate(-50% , -50%)" }}  />
                                </div>
                                {/* product detail */}
                                <div className='flex justify-between flex-col py-5' data-aos = "fade-left">
                                    <div className='flex flex-col gap-y-2'>
                                        <h1 className='text-2xl font-bold ' >{items.prodname}</h1>
                                        <h2 className='text-lg ' >${items.prodprice}</h2>
                                        <p className='text-sm text-gray-600' >Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Sequi asperiores ipsum  <br />exercitationem in facilisnobis doloribus laborum  <br />magnam consequatur vel?</p>
                                    </div>
                                    <div className='flex flex-col gap-y-4'>
                                        <button className='w-[25vw] btn px-4 py-2 rounded-xl' onClick={pushtocart} >Add to cart</button>
                                        <button className='w-[25vw] btn px-4 py-2 rounded-xl' >Add to wishlist</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* product image */}

                </div>
                <div className='md:hidden block'>

                    {
                        prodetail && prodetail.map((items, index) => (
                            <>
                                <div key={index} className='flex flex-col justify-between h-screen'>
                                    <div className='cursor-pointer rounded-xl shadow-2xl w-[100vw] h-[200px] overflow-hidden bg-gray-300 relative'>
                                        <div className='flex justify-between px-8'>
                                            <img src={items.prodimg} alt="" className=' w-[150px] h-[200px] opacity-30 rounded-xl shadow-xl detailimg' />
                                            <img src={items.prodimg} alt="" className=' w-[150px] h-[200px] opacity-30 rounded-xl shadow-xl detailimg' />
                                        </div>
                                        <i class="fa-solid fa-arrow-left absolute top-2 left-4 icon focus:scale-110 cursor-pointer" style={{ fontSize: "20px" }} onClick={navtohome} data-aos = "fade-up"></i>
                                        <img src={items.prodimg} alt="" className='w-[150px] h-[150px] rounded-xl shadow-xl absolute top-[50%] left-[50%] ' style={{ transform: "translate(-50% , -50%)" }}  data-aos = "fade-up"/>
                                    </div>
                                    <div className='flex justify-between flex-col py-5 px-5 gap-y-10'>
                                        <div className='flex flex-col gap-y-2'>
                                            <h1 className='text-2xl font-bold ' data-aos = "fade-up">{items.prodname}</h1>
                                            <h2 className='text-lg ' data-aos = "fade-up">${items.prodprice}</h2>
                                            <p className='text-sm text-gray-600' data-aos = "fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores ipsum exercitationem in facilisnobis doloribus laborum  magnam consequatur vel?</p>
                                        </div>
                                        <div className='flex flex-col gap-y-4'>
                                            <button className='w-full btn px-4 py-2 rounded-xl' onClick={pushtocart} data-aos = "fade-up">Add to cart</button>
                                            <button className='w-full btn px-4 py-2 rounded-xl' data-aos = "fade-up">Add to wishlist</button>
                                        </div>
                                    </div>

                                </div>
                            </>
                        ))
                    }

                </div>


                {
                    cartmsg && (
                        <>
                            <div className='modal-wrapper ' onClick={() => setcartmsg(false)}></div>
                            <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
                                <h1 className='text-xl font-medium'>Product added to cart successfully</h1>
                                <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setcartmsg(false)}>Ok</button>
                            </div>
                        </>
                    )
                }
                {
                    loginmodal && (
                        <>
                            <div className='modal-wrapper' onClick={() => setloginmodal(false)}></div>
                            <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
                                <h1 className='text-xl font-medium'>Login First</h1>
                                <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setloginmodal(false)}>Ok</button>
                            </div>
                        </>
                    )
                }
                {
                    existingitemmodal && (
                        <>
                            <div className='modal-wrapper' onClick={() => setexistingitemmodal(false)}></div>
                            <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
                                <h1 className='text-xl font-medium'>Item is already in cart</h1>
                                <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setexistingitemmodal(false)}>Ok</button>
                            </div>
                        </>
                    )
                }

            </div>
            <Footer />
        </>

    )
}
