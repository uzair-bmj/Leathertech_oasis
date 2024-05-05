import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Smartphone.css"
import useCart from "../../Hooks/useCart"
import useAuth from '../../Hooks/useAuth';

export default function SmartPhones() {

    const { cartitems, setcartitems } = useCart()
    const [cartmsg, setcartmsg] = useState(false)
    const { verifyuser } = useAuth()
    const [loginmodal, setloginmodal] = useState(false)
    const [existingitemmodal, setexistingitemmodal] = useState(false)



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const pushtocart = (index) => {
        if (verifyuser) {
            if (phoneData && phoneData[index]) {
                const existingItem = cartitems.find(
                    (item) => item.proname === phoneData[index].Productname && item.index === index
                );
                if (!existingItem) {
                    const cartobj = {
                        proimg: phoneData[index].imgurl,
                        proname: phoneData[index].Productname,
                        proprice: phoneData[index].productPrice,
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
        <div className='w-[95vw] mt-10 px-10 py-6 bg-gray-100 m-auto rounded-xl'>
            <h1 className='text-2xl font-bold mx-4 text-center md:text-start'>Best of Smartphones</h1>

            <Slider {...settings}>
                {phoneData.map((items, index) => (
                    <div key={index} className='flex justify-between min-w-48 px-4 py-4 cursor-pointer relative'>
                        <div className='w-[16rem] mx-auto bg-white rounded-xl shadow-lg card'>
                            <div className='h-64 overflow-hidden'>
                                <img className='w-full rounded-xl' src={items.imgurl} alt={items.Productname} />
                            </div>
                            <div className='px-6 py-4'>
                                <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                                <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                                <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                                <i class="fa-solid fa-cart-shopping absolute top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => pushtocart(index)}></i>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
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
    );
}


const phoneData = [
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
        imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/k/h/-original-imagzm8qmr7qxfhq.jpeg?q=70",
        Productname: "Samsung S23 Ultra",
        productPrice: "899",
        stars: 5,
        reviews: "1000+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/l/p/-original-imaghxemc3wtcuhb.jpeg?q=70",
        Productname: "iPhone 14 pro",
        productPrice: "999",
        stars: 5,
        reviews: "500+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/w/a/-original-imagdc87gdyremd3.jpeg?q=70",
        Productname: "Samsung galaxy m32",
        productPrice: "299",
        stars: 5,
        reviews: "1200+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70",
        Productname: "Google Pixel 7 pro",
        productPrice: "1199",
        stars: 5,
        reviews: "1500+"
    },
    {
        imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/p/e/-original-imagx9eg3nze8ctg.jpeg?q=70",
        Productname: "Samsung S24 Ultra",
        productPrice: "1299",
        stars: 5,
        reviews: "500+"
    },
    {
        imgurl: "https://static-01.daraz.pk/p/9dcc00a2a025c077673c25ffc9870125.jpg_300x0q75.webp",
        Productname: "iphone 13 pro max",
        productPrice: "399",
        stars: 5,
        reviews: "1000+"
    },


]