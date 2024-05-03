import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SmartPhones() {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true, 
        prevArrow: <PrevArrow />, 
        nextArrow: <NextArrow />, 
    };

    return (

        <>
            <div className='w-[99vw] m-auto mt-14'>
                <Slider {...settings}>
                    <div className='cursor-pointer '>
                            <div className='overflow-hidden '>
                                <img className='w-full ' src="/ad.jpg" alt=""/>
                            </div>
                    </div>
                    <div className='cursor-pointer'>
                            <div className='overflow-hidden'>
                                <img className='w-full ' src="/adwatch.jpg" alt=""/>
                            </div>
                    </div>
                    <div className='cursor-pointer'>
                            <div className='overflow-hidden'>
                                <img className='w-full ' src="/adjacket.jpg" alt=""/>
                            </div>
                    </div>
                    <div className='cursor-pointer'>
                            <div className='overflow-hidden'>
                                <img className='w-full ' src="/adwallet.jpg" alt=""/>
                            </div>
                    </div>

                </Slider>
            </div>
        </>
    );
}


function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: 10, position: 'absolute', zIndex : "1", top: '50%', transform: 'translateY(-50%)' }}
      onClick={onClick}
    >
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: 10, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} 
      onClick={onClick}
    >
    </div>
  );
}
