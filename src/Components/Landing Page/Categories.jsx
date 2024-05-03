import React from 'react'
import "./landing.css"
import { useNavigate } from 'react-router-dom'

export default function Categories() {


    const nav=  useNavigate()
    return (
        <>

            <div className='flex justify-center'>
                <div className='bg-gray-100 lg:w-[50vw] mt-12 px-6 py-4 rounded-xl mx-5'>
                    <h1 className='text-2xl font-bold text-center'>Categories</h1>
                    <div className='flex justify-between  flex-wrap mt-4'>
                        <div className='py-2' >
                            <div>
                                <img src="https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[100px] h-[100px] rounded-full cursor-pointer catimg' onClick={()=>nav('/phones')}/>
                                <p className='text-lg font-medium cursor-pointer'>Smart Phones</p>
                            </div>
                            
                        </div>
                        <div className='py-2' >
                            <div>
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/a/z/n/46-android-ios-txsmdwwsmwepicslvrblk01-txor-yes-original-imagr2nfgbrvrmva.jpeg?q=70" alt="" className='w-[100px] h-[100px] rounded-full cursor-pointer catimg' onClick={()=>{ nav('/watch')}}/>
                                <p className='text-lg font-medium cursor-pointer'>Smart Watches</p>
                            </div>
                            
                        </div>
                        <div className='py-2' >
                            <div>
                                <img src="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[100px] h-[100px] rounded-full cursor-pointer catimg' onClick={()=>{nav('/jacket')}} />
                                <p className='text-lg font-medium cursor-pointer'>leather Jackets</p>
                            </div>
                            
                        </div>
                        <div className='py-2' >
                            <div>
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/accessories-combo/k/m/f/ubf000wra4532-urban-forest-original-imagpzzysmcwmnsh.jpeg?q=70" alt="" className='w-[100px] h-[100px] rounded-full cursor-pointer catimg' onClick={()=>{nav('/wallet')}}/>
                                <p className='text-lg font-medium cursor-pointer'>leather Wallets</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

