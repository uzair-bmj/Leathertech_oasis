import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Service() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <>
        
            <div className='w-[90vw] md:w-[95vw] px-10 py-5 mt-10  bg-gray-100 m-auto rounded-xl'>
                <h1 className='text-3xl text-center font-black ' style={{color : "rgb(255, 187, 51)"}}>WHY CHOOSE US ?</h1>
                <div className='flex md:justify-between justify-center items-center flex-wrap px-6'>
                    <div className='flex flex-col' data-aos = "fade-up">
                        <img src="/discount.png" alt="" className='max-w-[200px]'/>
                        <h1 className='text-center text-xl font-medium italic'>Big Discounts</h1>
                    </div>
                    <div className='flex flex-col' data-aos = "fade-up">
                        <img src="/free delivery.png" alt=""  className='max-w-[300px]'/>
                        <h1 className='text-center text-xl font-medium italic'>Free Shipping</h1>

                    </div>
                    <div className='flex flex-col' data-aos = "fade-up">
                        <img src="/refund.png" alt="" className='max-w-[200px]'/>
                        <h1 className='text-center text-xl font-medium italic'>Refund Policy</h1>

                    </div>

                </div>

            </div>

        </>
    )
}
