import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


export default function SmartPhones() {

  const nav = useNavigate()
  const navigatetophone = () => {
    nav('/phones')
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const navigatetowatch = () => {
    nav('/watch')
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const navigatetojacket = () => {
    nav('/jacket')
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const navigatetowallet = () => {
    nav('/wallet')
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }



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
      <div className='sm:w-[99vw] w-[97vw] m-auto mt-12 sm:mt-14'>
        <Slider {...settings}>
          <div className='cursor-pointer '>
            <div className='overflow-hidden '>
              <img className='w-full sm:h-auto  h-[200px]' src="/ad.jpg" alt="" onClick={navigatetophone} />
            </div>
          </div>
          <div className='cursor-pointer'>
            <div className='overflow-hidden'>
              <img className='w-full sm:h-auto  h-[200px]' src="/adwatch.jpg" alt="" onClick={navigatetowatch} />
            </div>
          </div>
          <div className='cursor-pointer'>
            <div className='overflow-hidden'>
              <img className='w-full sm:h-auto  h-[200px]' src="/adjacket.jpg" alt="" onClick={navigatetojacket} />
            </div>
          </div>
          <div className='cursor-pointer'>
            <div className='overflow-hidden'>
              <img className='w-full sm:h-auto  h-[200px]' src="/adwallet.jpg" alt="" onClick={navigatetowallet} />
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
      style={{ ...style, left: 10, position: 'absolute', zIndex: "1", top: '50%', transform: 'translateY(-50%)' }}
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
