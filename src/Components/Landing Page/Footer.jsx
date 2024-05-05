import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  return (
    <>
      <div className='bg-gray-100 px-8 py-5 mt-10 footer'>
        <div className='flex justify-evenly'>
          <div className='w-[300px]'>
            <img src="./leathertechoasis-log.png" alt="" className='w-[300px]' />
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='price text-xl font-medium'>Links</h1>
            <Link to='/' onClick={scrollToTop}><h1>Home</h1></Link>
            <Link to="/" onClick={scrollToTop}><h1>About</h1></Link>
            <Link to="/products" onClick={scrollToTop}><h1>Products</h1></Link>
            <Link to="/cart" onClick={scrollToTop}><i className="fa-solid fa-cart-shopping cursor-pointer icon" style={{ fontSize: "20px"}} ></i></Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='price text-xl font-medium'>Categories</h1>
            <Link to="/phones" onClick={scrollToTop}><h1>Smartphones</h1></Link>
            <Link to="/watch" onClick={scrollToTop}><h1>Smartwatches</h1></Link>
            <Link to="/jacket" onClick={scrollToTop}><h1>Leather Jackets</h1></Link>
            <Link to="/wallet" onClick={scrollToTop}><h1>Leather Wallets</h1></Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='price text-xl font-medium'>Contacts</h1>
            <h1>www.leathertechOasis.com</h1>
            <h1>leathertechOasis032@gmail.com</h1>
            <h1>fb.com/leathertechOasis</h1>
            <h1>+92 212 7493424</h1>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-100 flex justify-center items-center mt-1 px-4 py-4 gap-2 footer'>
        <p className=' font-small md:font-medium  text-gray-600'>Copyright &copy; All Rights Reserved </p>
      </div>
    </>
  );
}
