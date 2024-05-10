import React, { useContext, useEffect, useState } from 'react'
import useCart from '../../Hooks/useCart'
import useOrder from "../../Hooks/useOrder"
import "./order.css"
import { useNavigate } from 'react-router-dom'
import Navbar from '../Landing Page/Navbar'
import Footer from '../Landing Page/Footer'
import { Authentication } from '../../Context/AuthContext'
import Spinner from '../Spinner'

export default function Order() {

  const { cartitems, setcartitems } = useCart()
  const { orderdetail, setorderdetail } = useOrder()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [city, setcity] = useState('')
  const [address, setaddress] = useState('')
  const [zipcode, setzipcode] = useState('')
  const [cartemptymodal, setcartemptymodal] = useState(false)
  const [placeordermodal, setplaceordermodal] = useState(false)
  const [submitorder, setsubmitorder] = useState(false)
  const [total, settotal] = useState(0)
  const { loading, setLoading } = useContext(Authentication);

  const nav = useNavigate()

  useEffect(() => {
    if (cartitems.length > 0) {
      const totalprice = cartitems.reduce((accu, items) => accu + (items.proprice * items.proquantity), 0)
      settotal(totalprice)
    }
  }, [cartitems, total])




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
    if (cartitems.length > 0) {
      const orderobj = {
        cusname: name,
        cusemail: email,
        cusphone: phone,
        cuscity: city,
        cusaddress: address,
        cuszipcode: zipcode,
        totalprice: total,
        products: cartitems.map(item => ({
          productimage: item.proimg,
          productName: item.proname,
          productprice: item.proprice,
          productquantity: item.proquantity
        }))
      };
      orderdetail.push(orderobj);
      console.log("Order Detail:", orderdetail);
      setname('');
      setemail('');
      setphone('');
      setcity('');
      setaddress('');
      setzipcode('');
      setplaceordermodal(false);
      setsubmitorder(true);
      cartitems.splice(0, cartitems.length)
    } else {
      setcartemptymodal(true);
    }
  }


  function navtomyorder(){
    setLoading(true)
    nav('/myorder')
  }

  return (
    <>
      {loading ? <Spinner /> : (
        <>
          <Navbar />
          <div className=' md:mt-16 bg-gray-300'>
            <div className='text-center flex justify-center px-10 py-5 items-center flex-col '>
              <div className='mt-12'>
                <h1 className='price text-2xl font-bold' data-aos ="fade-up">CHECKOUT</h1>
              </div>
              <div className='flex justify-between flex-wrap gap-x-5 lg:gap-y-5 '>
                <div className='flex flex-col justify-center lg:h-[400px] gap-y-8 bg-white mt-10 w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] rounded-xl px-6 py-5' data-aos ="fade-right">
                  <div>
                    <h1 className='text-lg font-medium'>Customer Details</h1>
                  </div>
                  <div className='orderform'>
                    <input type="text" value={name} className='rounded-lg px-3  py-2 md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Full Name' onChange={(e) => setname(e.target.value)} />
                    <input type="email" value={email} className='rounded-lg px-2  py-1 md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Email' onChange={(e) => setemail(e.target.value)} />
                    <input type="number" value={phone} className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Phone Number' onChange={(e) => setphone(e.target.value)} />
                    <input type="text" value={city} className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='City' onChange={(e) => setcity(e.target.value)} />
                    <input type="text" value={address} className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Address' onChange={(e) => setaddress(e.target.value)} />
                    <input type="number" value={zipcode} className='rounded-lg px-2 py-1  md:px-4 md:py-2  lg:px-6 lg:py-2 bg-gray-200 ' placeholder='Zipcode' onChange={(e) => setzipcode(e.target.value)} />
                  </div>
                  <div className='flex flex-col gap-y-3'>
                    <button className='btn px-4 py-3 rounded-xl w-full ' onClick={ordermsg}>Place Order</button>
                    {
                      submitorder && (
                        <>
                          <div style={{ background: "rgba(255, 187, 51, 0.205)" }} className='w-full rounded-xl px-4 py-3'>
                            <h1>Order Submitted <a href="#" className='underline' onClick={navtomyorder}>Click to see details</a></h1>

                          </div>
                        </>
                      )
                    }
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
                <div className='flex flex-col justify-between  gap-y-5 bg-white px-6 py-6 mt-10 rounded-xl md:w-[70vw] w-[90vw] lg:w-[30vw]' data-aos ="fade-left">
                  <div>
                    <h1>Total Amount</h1>
                    <h1 className='price font-bold text-xl'>{`$${total || 0}`}</h1>
                    <div className='w-full py-[0.5px] bg-gray-300 mt-3' >
                    </div>
                  </div>

                  <div>
                    {
                      cartitems && cartitems.map((items, index) => (
                        <div key={index} className='flex justify-between relative mt-5'>
                          <div>
                            <img src={items.proimg} alt="" className='rounded-full w-12 h-12' />
                          </div>
                          <div className=' text-start absolute left-16'>
                            <h1 className='text-md'>{items.proname}</h1>
                            <h1 className=' text-sm'>Quantity : {items.proquantity}</h1>
                          </div>
                          <div>
                            <h1>Price</h1>
                            <h1 className='price font-medium'>${items.proprice}</h1>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className='flex flex-col justify-between '>
                    <div className='w-full py-[0.5px] bg-gray-300 mt-3' >
                    </div>
                    <div className='flex justify-between mt-3'>
                      <h1 className='text-sm text-gray-500'>Subtotal :</h1>
                      <h1>{`$${total}`}</h1>
                    </div>
                    <div className='flex justify-between'>
                      <h1 className='text-sm text-gray-500'>Delivery Charges :</h1>
                      <h1>0</h1>
                    </div>
                    <div className='flex justify-between mt-5'>
                      <h1 className='price font-bold text-lg'>Total</h1>
                      <h1>{`$${total || 0}`}</h1>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <Footer />
        </>
      )}

    </>
  )
}
