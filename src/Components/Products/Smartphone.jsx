import React, { useContext, useState } from 'react'
import Footer from '../Landing Page/Footer'
import useProduct from '../../Hooks/useProduct'
import useCart from '../../Hooks/useCart'
import "./Products.css"
import useAuth from '../../Hooks/useAuth'

export default function Smartphone() {

  const [cartmsg, setcartmsg] = useState(false)
  const { phone, setphone, user, setuser } = useProduct()
  const { cartitems, setcartitems } = useCart()
  const { verifyuser, setverifyuser } = useAuth();
  const [loginmodal, setloginmodal] = useState(false)
  const [existingitemmodal, setexistingitemmodal] = useState(false)




  function pushtocart(index) {
    if (verifyuser) {
      if (phone && phone[index]) {
        const existingItem = cartitems.find(
          (item) => item.proname === phone[index].Productname && item.index === index
        );
        if (!existingItem) {
          const cartobject = {
            proimg: phone[index].imgurl,
            proname: phone[index].Productname,
            proprice: phone[index].productPrice,
            proquantity: 1,
            index: index,
          };
          cartitems.push(cartobject);
          setcartmsg(true);
          console.log(cartitems);
        } else {
          setexistingitemmodal(true)
        }
      } else {
        setloginmodal(true);
      }
    }
  }
  




  return (
    <>

      <div className=' flex flex-col justify-center gap-y-10 px-4 py-4'>
        <div className='mt-9 md:mt-16 relative bg-black rounded-xl'>
          <img src="./phone.jpg " className='rounded-xl opacity-30' alt="" />
          <h1 className='text-5xl text-center font-bold absolute top-[50%] left-[50%] heading'>SMART PHONES</h1>
        </div>
        <div className='text-center mt-5'>
          <h1 className='text-gray-500 text-3xl font-bold'>SMART PHONES -<span className='text-2xl' style={{ color: "rgb(255, 187, 51)" }}>Devices that connect worlds.</span></h1>
        </div>
        <div className='flex justify-center md:justify-between gap-y-5 flex-wrap px-4 py-4 bg-white rounded-xl'>

          {
            phone && phone.map((items, index) => (
              <div className='px-4 w-[18rem] py-4 cursor-pointer relative' key={index}>
                <div className='min-w-48 mx-auto bg-white rounded-xl shadow-lg card' >
                  <div className='w-full h-60 overflow-hidden'>
                    <img className=' h-64 rounded-xl' src={items.imgurl} alt={items.Productname} />
                  </div>
                  <div className='px-6 py-4 overflow-hidden'>
                    <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                    <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                    <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                    <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => pushtocart(index)}></i>

                  </div>
                </div>
              </div>
            ))
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
      <Footer />
    </>
  )
}
