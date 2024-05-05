import React, { useState } from 'react'
import useProduct from '../../Hooks/useProduct'
import useCart from '../../Hooks/useCart'
import useAuth from '../../Hooks/useAuth'
import { Link } from 'react-router-dom'

export default function Leatherwallets() {

  const { wallets } = useProduct()
  const [cartmsg, setcartmsg] = useState(false)
  const { cartitems, setcartitems } = useCart()
  const { verifyuser, setverifyuser } = useAuth();
  const [loginmodal, setloginmodal] = useState(false)
  const [existingitemmodal, setexistingitemmodal] = useState(false)


  function pushtocart(index) {
    if (verifyuser) {
      if (wallets && wallets[index]) {
        const existingItem = cartitems.find(
          (item) => item.proname === wallets[index].Productname && item.index === index
        );
        if (!existingItem) {
          const cartobject = {
            proimg: wallets[index].imgurl,
            proname: wallets[index].Productname,
            proprice: wallets[index].productPrice,
            proquantity: 1,
            index : index

          };

          cartitems.push(cartobject)
          setcartmsg(true);
          console.log(cartitems);
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

      <div className='flex flex-col justify-center gap-y-10 px-4 py-4' >
        <div className='mt-14 md:mt-16 relative bg-black rounded-xl'>
          <img src="./wallet.jpg " className='rounded-xl opacity-30 md:h-auto h-[200px]' alt="" />
          <h1 className='text-2xl md:text-5xl text-center font-bold absolute top-[50%] left-[50%] heading'>LEATHER WALLETS</h1>
        </div>
        <div>
          <h1 className='text-lg price '>Back to <Link to="/">Home </Link></h1>
        </div>
        <div className='text-center mt-5'>
          <h1 className='text-gray-500 text-xl md:text-3xl font-bold'>WALLETS -<span className='text-xl md:text-2xl' style={{ color: "rgb(255, 187, 51)" }}> that carry stories.</span></h1>
        </div>
        <div className='flex justify-center md:justify-between flex-wrap px-4 py-4 bg-white rounded-xl'>
          {
            wallets && wallets.map((items, index) => (
              <div className='w-[18rem] px-4  py-4 cursor-pointer relative' key={index}>
                <div className='min-w-44 mx-auto bg-white rounded-xl shadow-lg card' >
                  <div className='h-64 w-full overflow-hidden'>
                    <img className='rounded-xl' src={items.imgurl} alt={items.Productname} />
                  </div>
                  <div className='px-6 py-4'>
                    <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                    <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                    <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                  </div>
                  <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => pushtocart(index)}></i>
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

    </>
  )
}
