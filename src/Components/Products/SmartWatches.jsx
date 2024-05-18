import React, { useContext, useEffect, useState } from 'react'
import useProduct from '../../Hooks/useProduct'
import useCart from '../../Hooks/useCart'
import "./Products.css"
import useAuth from '../../Hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../Landing Page/Navbar"
import Footer from "../Landing Page/Footer"
import Spinner from "../Spinner"
import { Authentication } from '../../Context/AuthContext'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function SmartWatches() {

  const { cartitems, setcartitems } = useCart()
  const { verifyuser } = useAuth()
  const [cartmsg, setcartmsg] = useState(false)
  const [loginmodal, setloginmodal] = useState(false)
  const [existingitemmodal, setexistingitemmodal] = useState(false)
  const { loading, setLoading } = useContext(Authentication)
  const { watches, prodetail, setprodetail } = useProduct()
  const nav = useNavigate()
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);


  function pushtoprodetail(index) {
    console.clear()
    const proobj = {
      prodimg: watches[index].imgurl,
      prodname: watches[index].Productname,
      prodprice: watches[index].productPrice,
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
      if (watches && watches[index]) {
        const existingItem = cartitems.find(
          (items) => items.proname == watches[index].Productname && items.index == index
        )
        if (!existingItem) {
          const cartobj = {
            proimg: watches[index].imgurl,
            proname: watches[index].Productname,
            proprice: watches[index].productPrice,
            proquantity: 1,
            index: index

          }
          setcartitems([...cartitems , cartobj])
          console.log(cartitems)
          setcartmsg(true)
        }
        else {
          setexistingitemmodal(true)
        }
      }
    }
    else {
      setloginmodal(true)
    }

  }

  return (
    <>
      {loading ? <Spinner /> : (
        <>
          <Navbar />

          <div className='flex flex-col justify-center gap-y-10 px-4 py-4'>
            <div className='mt-14 md:mt-16 relative bg-black rounded-xl' data-aos ="fade-up">
              <img src="./watch.jpg " className='rounded-xl opacity-30 md:h-auto h-[200px]' alt="" />
              <h1 className='text-2xl md:text-5xl text-center font-bold absolute top-[50%] left-[50%] heading'>SMART WATCHES</h1>
            </div>
            <div>
              <h1 className='text-lg price' data-aos = 'fade-right'>Back to <Link to="/">Home </Link></h1>
            </div>
            <div className='text-center mt-2' data-aos ="fade-up">
              <h1 className='text-gray-500 text-3xl font-bold'>SMART WATCHES -<span className='text-xl md:text-2xl' style={{ color: "rgb(255, 187, 51)" }}> Timekeepers that sync life.</span></h1>
            </div>
            <div className='flex justify-center md:justify-between gap-y-5 flex-wrap px-4 py-4 mt-5 bg-white rounded-xl'>

              {
                watches && watches.map((items, index) => (
                  <div className='w-[18rem] overflow-hidden px-4  py-4 cursor-pointer relative' key={index} data-aos ="fade-up">
                    <div className='min-w-48 mx-auto bg-white rounded-xl shadow-lg card' >
                      <div className='h-64 w-full overflow-hidden' onClick={() => pushtoprodetail(index)} >
                        <img className='rounded-xl' src={items.imgurl} alt={items.Productname} />
                      </div>
                      <div className='px-6 py-4'>
                        <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                        <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                        <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                        <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => { pushtocart(index) }}></i>

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
      )}


    </>
  )
}
