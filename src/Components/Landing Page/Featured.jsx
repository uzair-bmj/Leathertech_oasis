import React, { useContext, useState } from 'react'
import useCart from '../../Hooks/useCart'
import useAuth from '../../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import useProduct from "../../Hooks/useProduct"
import { Authentication } from '../../Context/AuthContext'

export default function Featured() {

    const { cartitems, setcartitems } = useCart()
    const [cartmsg, setcartmsg] = useState(false)
    const { verifyuser } = useAuth()
    const [loginmodal, setloginmodal] = useState(false)
    const [existingitemmodal, setexistingitemmodal] = useState(false)
    const { prodetail, setprodetail } = useProduct()
    const { loading, setLoading } = useContext(Authentication)
    const nav = useNavigate()


    function pushtoprodetail(index) {
        console.clear()
        const proobj = {
            prodimg: featured[index].imgurl,
            prodname: featured[index].Productname,
            prodprice: featured[index].productPrice,
        };

        setprodetail([proobj]);
        console.log(prodetail);
        nav('/prodetail');
        setLoading(true)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    const pushtocart = (index) => {
        if (verifyuser) {
            if (featured && featured[index]) {
                const existingItem = cartitems.find(
                    (item) => item.proname === featured[index].Productname && item.index === index
                );
                if (!existingItem) {
                    const cartobj = {
                        proimg: featured[index].imgurl,
                        proname: featured[index].Productname,
                        proprice: featured[index].productPrice,
                        proquantity: 1,
                        index: index
                    }
                    cartitems.push(cartobj);
                    setcartmsg(true)

                }
                else {
                    setexistingitemmodal(true)
                }
            }
        } else {
            setloginmodal(true)
        }


    }

    return (
        <>
            <div className='w-[90vw] md:w-[95vw] px-10 py-5 mt-10 bg-gray-100 m-auto rounded-xl'>
                <h1 className='md:text-2xl text-xl md:text-start text-center font-bold'>Most Featured</h1>
                <div className='flex justify-between items-center flex-wrap py-2  gap-y-4 relative'>
                    {
                        featured.map((items, index) => {
                            return (
                                <div className=' shadow-lg rounded-xl cursor-pointer card relative' key={index} onClick={() => pushtoprodetail(index)}>
                                    <div className='w-[16rem] '>
                                        <div className='h-64 overflow-hidden'>
                                            <img src={items.imgurl} alt={items.Productname} className='w-full rounded-xl overflow-hidden' />
                                        </div>
                                        <div className='px-6 py-4'>
                                            <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                                            <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                                            <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>

                                        </div>
                                        <i class="fa-solid fa-cart-shopping absolute right-3 top-[91%] cart" style={{ fontSize: "18px" }} onClick={() => pushtocart(index)}></i>
                                    </div>

                                </div>
                            )

                        })
                    }
                </div>
                {
                    cartmsg && (
                        <>
                            <div className='modal-wrapper' onClick={() => setcartmsg(false)}></div>
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
        </>
    )
}

const featured = [
    {
        imgurl: "https://static-01.daraz.pk/p/f4a07829d49480a8efd401318e7b2437.jpg_300x0q75.webp",
        Productname: "iPhone 15 pro max",
        productPrice: "899",
        stars: 5,
        reviews: "500+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/a/r/-original-imagtrf9qm3dufq9.jpeg?q=70",
        Productname: "Google Pixel 7",
        productPrice: "799",
        stars: 5,
        reviews: "300+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/612/612/ku8pbbk0/smartwatch/x/w/8/ios-mkhw3hn-a-apple-yes-original-imag7eqypz9zkbn3.jpeg?q=70",
        Productname: "Apple watch Series 9",
        productPrice: "999",
        stars: 5,
        reviews: "2000+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/q/n/-original-imagz6mxharafcf7.jpeg?q=70",
        Productname: "Spark Watch",
        productPrice: "299",
        stars: 5,
        reviews: "500+"
    },
    {
        imgurl: "https://images.pexels.com/photos/19196517/pexels-photo-19196517/free-photo-of-man-in-sunglasses-and-black-jacket-on-street.jpeg?auto=compress&cs=tinysrgb&w=600",
        Productname: "Leather Jacket",
        productPrice: "399",
        stars: 5,
        reviews: "2000+"
    },
    {
        imgurl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Productname: "Leather Jacket",
        productPrice: "999",
        stars: 5,
        reviews: "1000+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/612/612/kx6fwcw0/wallet-card-wallet/b/p/a/nova-egc102blu1055-wallet-eagle-crest-original-imag9zxckez2x8cv.jpeg?q=70",
        Productname: "Leather Wallet",
        productPrice: "49",
        stars: 5,
        reviews: "100+"
    },
    {
        imgurl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjB3YWxsZXRzfGVufDB8MXwwfHx8MA%3D%3D",
        Productname: "Leather Wallet",
        productPrice: "149",
        stars: 5,
        reviews: "1500+"
    },
]