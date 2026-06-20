import React, { useState } from "react";
import Container from './Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannner from '../assets/Bannner.png'
import { FaAngleRight } from "react-icons/fa";


const Banners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: dots => (
      <div  >
        <ul className="absolute left-[50%] -top-17.5 translate-x-[-50%]! m-0"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="rounded-full w-3 h-3" >

      </div>
    )

  }



  return (
    <div>
      <Container>
        <div className='flex'>
          <div className='w-[20%]  pr-5.5 pt-10.25 border-r-2 border-[#000000]/30'>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center justify-between '> Woman’s Fashion  <FaAngleRight /> </li>
              <li className='flex items-center justify-between'> Men’s Fashion <FaAngleRight /> </li>
              <li>Electronics</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Babys and Toys</li>
              <li>Groceries &  </li>
              <li>Health & Beauty</li>

            </ul>
          </div>
          <div className='w-[80%] pt-10.25 pl-12.25'>
            <Slider {...settings}>
              <div>
                <img src={Bannner} />
              </div>
              <div>
                <img src={Bannner} />
              </div>
              <div>
                <img src={Bannner} />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default Banners
