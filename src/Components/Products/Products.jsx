import React, { useEffect, useState } from 'react'
import useProduct from '../../Hooks/useProduct'
import useCart from '../../Hooks/useCart'
import useAuth from '../../Hooks/useAuth'
import "./Products.css"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../Landing Page/Navbar"
import Footer from "../Landing Page/Footer"
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Products() {

  const { phone } = useProduct()
  const { watches } = useProduct()
  const { jackets } = useProduct()
  const { wallets } = useProduct()
  const { cartitems, setcartitems } = useCart()
  const { verifyuser, setverifyuser } = useAuth();
  const [loginmodal, setloginmodal] = useState(false)
  const [existingitemmodal, setexistingitemmodal] = useState(false)
  const [cartmsg, setcartmsg] = useState(false)
  const { prodetail, setprodetail } = useProduct()
  const nav = useNavigate()

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);


  function pushtophonedetail(index) {
    console.clear()
    const proobj = {
      prodimg: phone[index].imgurl,
      prodname: phone[index].Productname,
      prodprice: phone[index].productPrice,
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
  function pushtowatchdetail(index) {
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
  function pushtojacketdetail(index) {
    console.clear()
    const proobj = {
      prodimg: jackets[index].imgurl,
      prodname: jackets[index].Productname,
      prodprice: jackets[index].productPrice,
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
  function pushtowalletdetail(index) {
    console.clear()
    const proobj = {
      prodimg: wallets[index].imgurl,
      prodname: wallets[index].Productname,
      prodprice: wallets[index].productPrice,
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


  function phonetocart(index) {
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
      }
    }
    else {
      setloginmodal(true);
    }
  }

  function jackettocart(index) {
    if (verifyuser) {
      if (jackets && jackets[index]) {
        const existingItem = cartitems.find(
          (item) => item.proname === jackets[index].Productname && item.index === index
        );
        if (!existingItem) {
          const cartobject = {
            proimg: jackets[index].imgurl,
            proname: jackets[index].Productname,
            proprice: jackets[index].productPrice,
            proquantity: 1,
            index: index

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

  const watchtocart = (index) => {
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
          cartitems.push(cartobj)
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

  function wallettocart(index) {
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
            index: index

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
      <Navbar />
      <div className=' px-10 py-8 flex flex-col justify-center items-center mt-14 md:mt-16 gap-y-10'>
        <div>
          <h1 className='text-lg price ' data-aos = "fade-right">Back to <Link to="/" >Home </Link></h1>
        </div>
        <h1 className='price text-3xl font-bold ' data-aos = "fade-up">Products</h1>
        <div className='flex flex-col justify-center gap-y-10'>
          <div className='bg-black rounded-xl relative' data-aos = "fade-up">
            <img src="/phone.jpg" alt="" className='rounded-xl opacity-40 md:h-auto h-[200px]' />
            <h1 className='price text-3xl sm:text-6xl z-10 font-bold absolute top-[50%] left-[50%]' style={{ transform: "translate(-50% ,-50%" }}>SmartPhones</h1>
          </div>
          <div className='flex justify-center md:justify-between gap-y-5 flex-wrap px-4 py-4 bg-white rounded-xl'>

            {
              phone && phone.map((items, index) => (
                <div className='px-4 w-[18rem] py-4 cursor-pointer relative' key={index} data-aos = "fade-up">
                  <div className='min-w-48 mx-auto bg-white rounded-xl shadow-lg card' >
                    <div className='w-full h-60 overflow-hidden' onClick={() => pushtophonedetail(index)}>
                      <img className=' h-64 rounded-xl' src={items.imgurl} alt={items.Productname} />
                    </div>
                    <div className='px-6 py-4 overflow-hidden'>
                      <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                      <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                      <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                      <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => phonetocart(index)}></i>

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col justify-center gap-y-10'>
          <div className='bg-black rounded-xl relative' data-aos = "fade-up">
            <img src="/watch.jpg" alt="" className='rounded-xl opacity-40  md:h-auto h-[200px]' />
            <h1 className='price text-3xl sm:text-6xl z-10 font-bold absolute top-[50%] left-[50%]' style={{ transform: "translate(-50% ,-50%" }}>SmartWatches</h1>
          </div>
          <div className='flex justify-center md:justify-between gap-y-5 flex-wrap px-4 py-4 mt-5 bg-white rounded-xl'>
            {
              watches && watches.map((items, index) => (
                <div className='w-[18rem] overflow-hidden px-4  py-4 cursor-pointer relative' key={index} data-aos = "fade-up" >
                  <div className='min-w-48 mx-auto bg-white rounded-xl shadow-lg card' >
                    <div className='h-64 w-full overflow-hidden' onClick={() => pushtowatchdetail(index)}>
                      <img className='rounded-xl' src={items.imgurl} alt={items.Productname} />
                    </div>
                    <div className='px-6 py-4'>
                      <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                      <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                      <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                      <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => { watchtocart(index) }}></i>

                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <div className='flex flex-col justify-center gap-y-10'>
          <div className='bg-black rounded-xl relative' data-aos = "fade-up">
            <img src="/jacket.jpg" alt="" className='rounded-xl opacity-40 md:h-auto h-[200px]' />
            <h1 className='price text-3xl sm:text-6xl z-10 font-bold absolute top-[50%] left-[50%]' style={{ transform: "translate(-50% ,-50%" }}>Leather Jackets</h1>
          </div>
          <div className='flex justify-center md:justify-evenly flex-wrap py-4 bg-white rounded-xl'>

            {
              jackets && jackets.map((items, index) => (
                <div className='w-[18rem] px-4  py-4 cursor-pointer relative' key={index} data-aos = "fade-up">
                  <div className='min-w-44 mx-auto bg-white rounded-xl shadow-lg card' >
                    <div className='h-64 w-full overflow-hidden' onClick={() => pushtojacketdetail(index)}>
                      <img className='rounded-xl' src={items.imgurl} alt={items.Productname} />
                    </div>
                    <div className='px-6 py-4'>
                      <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                      <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                      <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => jackettocart(index)}></i>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <div className='flex flex-col justify-center gap-y-10'>
          <div className='bg-black rounded-xl relative' data-aos = "fade-up">
            <img src="/wallet.jpg" alt="" className='rounded-xl opacity-40  md:h-auto h-[200px]' />
            <h1 className='price text-3xl sm:text-6xl z-10 font-bold absolute top-[50%] left-[50%]' style={{ transform: "translate(-50% ,-50%" }}>Leather Wallets</h1>
          </div>
          <div className='flex justify-center md:justify-between flex-wrap px-4 py-4 bg-white rounded-xl'>
            {
              wallets && wallets.map((items, index) => (
                <div className='w-[18rem] px-4  py-4 cursor-pointer relative' key={index} data-aos = "fade-up">
                  <div className='min-w-44 mx-auto bg-white rounded-xl shadow-lg card' >
                    <div className='h-64 w-full overflow-hidden' onClick={() => pushtowalletdetail(index)}>
                      <img className='rounded-xl' src={items.imgurl} alt={items.Productname} />
                    </div>
                    <div className='px-6 py-4'>
                      <div className='font-bold text-lg mb-2'>{items.Productname}</div>
                      <p className='text-gray-700 text-base'>Price: ${items.productPrice}</p>
                      <p className='text-gray-700 text-base underline cursor-pointer'>{items.reviews} reviews</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping absolute right-8 top-[88%] cart" style={{ fontSize: "18px" }} onClick={() => wallettocart(index)}></i>
                  </div>
                </div>
              ))
            }

          </div>

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
