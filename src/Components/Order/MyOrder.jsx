import React, { useEffect, useState } from 'react'
import "./order.css"
import useCart from '../../Hooks/useCart'
import useOrder from '../../Hooks/useOrder'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

export default function MyOrder() {

  const { orderdetail, setorderdetail } = useOrder()
  const nav = useNavigate()
  const { verifyuser, setverifyuser } = useAuth()
  const [loginmodal, setloginmodal] = useState(false)



  useEffect(() => {
    if (!verifyuser) {
      nav('/login')
      setloginmodal(true)
      

    }
  }, [verifyuser])


  return (
    <>
      <div className='lg:h-[100vh] px-8 py-8 '>
        <div className='mt-24 flex flex-col justify-center items-center'>
          <h1 className='price font-bold  text-3xl '>MY ORDERS</h1>
          <div className='flex flex-col justify-center items-center gap-x-4 lg:flex-row'>
            <div className='flex flex-col gap-y-3 mt-10  px-5 py-5 w-[90vw] md:w-[60vw] lg:w-[40vw] rounded-xl bg-white '>
              <h1 className='price text-center font-bold text-xl '>ITEMS DETAIL </h1>
              <div className='flex justify-between   w-full  relative items-center'>
                <h1 className='text-gray-500 font-medium  text-sm md:text-lg'>Image</h1>
                <h1 className=' text-gray-500 font-medium  text-sm md:text-lg'>Product Name</h1>
                <h1 className=' text-gray-500 font-medium  text-sm md:text-lg'>Quantity</h1>
                <h1 className='text-gray-500 font-medium  text-sm md:text-lg'>Price</h1>
              </div>
              {
                orderdetail.map((order, index) => (
                  order.products.map((product, productIndex) => (
                    <div key={`${index}-${productIndex}`} className='flex justify-between relative w-full items-center '>
                      <img src={product.productimage} alt="" className='w-10 h-10 md:w-12 md:h-12 rounded-full ' />
                      <h1 className=''>{product.productName}</h1>
                      <h1 className=''>{product.productquantity}</h1>
                      <h1>${product.productprice}</h1>
                    </div>
                  ))
                ))
              }

            </div>
            <div className='px-5 py-5 md:w-[50vw] w-[70vw] lg:w-[30vw] bg-white mt-10 rounded-xl '>
              <h1 className='price text-center font-bold text-xl '>CUSTOMER DETAIL </h1>
              {orderdetail && orderdetail.map((item, index) => (
                <div className='customer mt-5' key={item.id || index}>
                  <h1 className='text-sm text-gray-500 font-medium '>Full Name :</h1>
                  <h1>{item.cusname}</h1>
                  <h1 className='text-sm text-gray-500 font-medium '>Phone Number :</h1>
                  <h1>{item.cusphone}</h1>
                  <h1 className='text-sm text-gray-500 font-medium '>Delivery Address : </h1>
                  <h1>{item.cusaddress}</h1>
                  <h1 className='text-sm text-gray-500 font-medium '>Payment Method : </h1>
                  <h1>Cash On Delivery </h1>
                  <h1 className='text-sm text-gray-500 font-medium '>Total : </h1>
                  <h1 className='price text-lg font-bold '>${item.totalprice} </h1>
                </div>
              ))}
              <button className='px-4 py-2 btn rounded-xl ' onClick={()=>nav("/")}>Home</button>

            </div>
          </div>
        </div>
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

      </div>

    </>
  )
}
