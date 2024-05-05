import React from 'react'
import "./landing.css"
import { useNavigate } from 'react-router-dom'

export default function Categories() {


    const nav = useNavigate()
    return (
        <>

            <div className='flex justify-center m-auto'>
                <div className='bg-gray-100 lg:w-[40vw] mt-12 px-4 py-4 rounded-xl '>
                    <h1 className='text-2xl font-bold text-center'>Categories</h1>
                    <div className='grid grid-cols-2 gap-x-5 mt-4'>  
                        <div className='py-2' onClick={() => nav('/phones')}>
                            <div className='flex flex-col items-center'> 
                                <img src="https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full cursor-pointer catimg' />
                                <p className=' md:text-md lg:text-lg font-medium cursor-pointer text-center'>Smart Phones</p>
                            </div>
                        </div>
                        <div className='py-2' onClick={() => nav('/watch')}>
                            <div className='flex flex-col items-center'>
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/a/z/n/46-android-ios-txsmdwwsmwepicslvrblk01-txor-yes-original-imagr2nfgbrvrmva.jpeg?q=70" alt="" className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full cursor-pointer catimg' />
                                <p className=' md:text-md lg:text-lg font-medium cursor-pointer text-center'>Smart Watches</p>
                            </div>
                        </div>
                        <div className='py-2' onClick={() => nav('/jacket')}>
                            <div className='flex flex-col items-center'>
                                <img src="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full cursor-pointer catimg' />
                                <p className=' md:text-md lg:text-lg font-medium cursor-pointer text-center'>leather Jackets</p>
                            </div>
                        </div>
                        <div className='py-2' onClick={() => nav('/wallet')}>
                            <div className='flex flex-col items-center'>
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/accessories-combo/k/m/f/ubf000wra4532-urban-forest-original-imagpzzysmcwmnsh.jpeg?q=70" alt="" className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full cursor-pointer catimg' />
                                <p className=' md:text-md lg:text-lg font-medium cursor-pointer text-center'>leather Wallets</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
