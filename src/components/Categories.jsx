import React from 'react'
import Container from './Container'
import SecHead from '../SubComp/SecHead'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";import { CiCamera } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";import { LuGamepad } from "react-icons/lu";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute right-0 -top-18 bg-[#00000031] rounded-full mx-2'
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <GoArrowRight className='text-black text-2xl' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute right-8 -top-18 bg-[#00000031] rounded-full mx-2'
      // style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      <GoArrowLeft className='text-black text-2xl' />
    </div>
  );
}


const Categories = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }


  return (
    <div>
      <Container>
        <div className='pt-20 pb-17.5 border-b-2 border-[#0000002c]'>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <SecHead smalltext="Categories" LargeText="Browse By Category" />
          </div>
        </div>
        <div className='pt-15'>
          <Slider {...settings}>
            
            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <CiMobile4 />
              </div>
              <h4 className='text-center items-center'>Phone</h4>
            </div>

            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <HiOutlineComputerDesktop />
              </div>
              <h4 className='text-center items-center'>Computers</h4>
            </div>

            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <BsSmartwatch />
              </div>
              <h4 className='text-center items-center'>SmartWatch</h4>
            </div>

            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <CiCamera />
              </div>
              <h4 className='text-center items-center'>Camera</h4>
            </div>

            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <FiHeadphones />
              </div>
              <h4 className='text-center items-center'>HeadPhones</h4>
            </div>

            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <LuGamepad />
              </div>
              <h4 className='text-center items-center'>Gaming</h4>
            </div>

            <div className='w-42.5! h-36.25 border-2 border-[#00000039] rounded mx-3.5 hover:bg-[#DB4444] hover:text-white'>
              <div className='text-[56px] px-14.25 pt-6.25 pb-4'>
                <CiMobile4 />
              </div>
              <h4 className='text-center items-center'>Phone</h4>
            </div>


          </Slider>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Categories