import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import {Authentication} from "../../Context/AuthContext"
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  const { loading, setLoading } = useContext(Authentication);

  useEffect(() => {
    Aos.init({ duration: 1000 })
}, []);
    
  const scrollToTop = () => {
    setLoading(true)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className='bg-gray-100 px-8 py-5 mt-10 footer'>
        <div className='flex justify-evenly ft'>
          <div className='w-[300px]' data-aos = "fade-right">
            <img src="./leathertechoasis-log.png" alt="" className='w-[300px]' />
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='price text-xl font-medium' data-aos = "fade-up">Links</h1>
            <Link to='/' onClick={scrollToTop}><h1 data-aos = "fade-up">Home</h1></Link>
            <Link to="/" onClick={scrollToTop}><h1 data-aos = "fade-up">About</h1></Link>
            <Link to="/products" onClick={scrollToTop}><h1 data-aos = "fade-up">Products</h1></Link>
            <Link to="/cart" onClick={scrollToTop}><i className="fa-solid fa-cart-shopping cursor-pointer icon" data-aos = "fade-up" style={{ fontSize: "20px" }} ></i></Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='price text-xl font-medium' data-aos = "fade-up">Categories</h1>
            <Link to="/phones" onClick={scrollToTop}><h1 data-aos = "fade-up">Smartphones</h1></Link>
            <Link to="/watch" onClick={scrollToTop}><h1 data-aos = "fade-up">Smartwatches</h1></Link>
            <Link to="/jacket" onClick={scrollToTop}><h1 data-aos = "fade-up">Leather Jackets</h1></Link>
            <Link to="/wallet" onClick={scrollToTop}><h1 data-aos = "fade-up">Leather Wallets</h1></Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='price text-xl font-medium' data-aos = "fade-up">Contacts</h1>
            <h1 data-aos = "fade-up">www.leathertechOasis.com</h1>
            <h1 data-aos = "fade-up">leathertechOasis032@gmail.com</h1>
            <h1 data-aos = "fade-up">fb.com/leathertechOasis</h1>
            <h1 data-aos = "fade-up">+92 212 7493424</h1>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-100 flex justify-center items-center mt-1 px-4 py-4 gap-2 footer'>
        <p className=' font-small md:font-medium  text-gray-600'>Copyright &copy; All Rights Reserved </p>
      </div>
    </>
  );
}
