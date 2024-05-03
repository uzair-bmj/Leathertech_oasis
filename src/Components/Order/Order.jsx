import React, { useEffect, useState } from 'react'
import useCart from '../../Hooks/useCart'
import useOrder from "../../Hooks/useOrder"
import "./order.css"

export default function Order() {

  const { cartitems, setcartitems } = useCart()
  const { orderdetail, setorderdetail } = useOrder()
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const [city, setcity] = useState()
  const [address, setaddress] = useState()
  const [zipcode, setzipcode] = useState()
  const [cartemptymodal, setcartemptymodal] = useState(false)
  const [placeordermodal, setplaceordermodal] = useState(false)



  const ordermsg = () => {
    if (name && email && phone && city && address && zipcode) {
      if (cartitems.length > 0) {
        setplaceordermodal(true)
      }
      else {
        setcartemptymodal(true)
      }
    }
    else {
      alert("please fillout all fields")
    }
  }

  function placeorder() {
    const orderobj = {
      cusname: name,
      cusemail: email,
      cusphone: phone,
      cuscity: city,
      cusaddress: address,
      cuszipcode: zipcode,
    }
    orderdetail.push(orderobj)
    console.log(orderdetail)
    setname('');
    setemail('');
    setphone('');
    setcity('');
    setaddress('');
    setzipcode('');
    setplaceordermodal(false)



  }


  return (
    <>
      <div className='h-screen mt-16 bg-gray-300'>
        <div className='text-center flex justify-center px-10 py-5 m-auto items-center flex-col '>
          <div className='mt-12'>
            <h1 className='price text-2xl font-bold'>ORDER DETAILS</h1>
          </div>
          <div className='flex justify-between gap-x-5'>
            <div className='flex flex-col justify-center gap-y-8 bg-white mt-10 w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] rounded-xl px-6 py-5'>
              <div>
                <h1 className='text-lg font-medium'>Customer Details</h1>
              </div>
              <div className='orderform'>
                <input type="text" className='rounded-lg px-2  py-1 md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Full Name' onChange={(e) => setname(e.target.value)} />
                <input type="email" className='rounded-lg px-2  py-1 md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Email' onChange={(e) => setemail(e.target.value)} />
                <input type="number" className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Phone Number' onChange={(e) => setphone(e.target.value)} />
                <input type="text" className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='City' onChange={(e) => setcity(e.target.value)} />
                <input type="text" className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Address' onChange={(e) => setaddress(e.target.value)} />
                <input type="number" className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Zipcode' onChange={(e) => setzipcode(e.target.value)} />
              </div>
              <div>
                <button className='btn px-4 py-3 rounded-xl w-full ' onClick={ordermsg}>Place Order</button>
              </div>
              {
                cartemptymodal && (
                  <>
                    <div className='modal-wrapper' onClick={() => setcartemptymodal(false)}></div>
                    <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
                      <h1 className='text-xl font-medium'>Cart is Empty</h1>
                      <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setcartemptymodal(false)}>Ok</button>
                    </div>
                  </>
                )
              }
              {
                placeordermodal && (
                  <>
                    <div className='modal-wrapper' onClick={() => setplaceordermodal(false)}></div>
                    <div className='container rounded shadow-lg py-4 px-4 max-w-[20rem]'>
                      <h1 className='text-xl font-medium'>Are you sure you want to place order</h1>
                      <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setplaceordermodal(false)}>Cancel</button>
                      <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={placeorder}>Place Order</button>
                    </div>
                  </>
                )
              }

            </div>
            <div className='orderdetails bg-white px-6 py-5 rounded-xl w-[30vw]'>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}
