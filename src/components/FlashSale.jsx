import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from '../SubComp/SecHead'
import Semic from '../assets/Semiclone.png'
import ContentBox from '../SubComp/ContentBox'
import Connt1 from '../assets/contt1.png'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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





const FlashSale = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  const CountDownBox = ({ number, text }) => {
    return (
      <div className='w-11.5 flex items-center'>
        <div className='flex flex-col'>
          <span className='font-medium text-[12px]'>{text}</span>
          <strong className='font-bold text-[32px]'>{number}</strong>
        </div>
        {/* <img src={Semic} alt=''/> */}
      </div>

    )
  }

  const CountDown = ({ targetDate }) => {

    const tttimeLeft = () => {
      const difference = new Date(targetDate) - new Date()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / (1000 * 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),

        }
      }

      return {
        days: 0, hours: 0, minutes: 0, seconds: 0
      }

    }

    const [timeLeft, settimeLeft] = useState(tttimeLeft())


    useEffect(() => {
      const timer = setInterval(() => {
        settimeLeft(tttimeLeft)
      }, 1000);
      return () => clearInterval(timer)
    }, [])

    return (
      <div className='flex items-center w-76 gap-4 '>
        <CountDownBox number={timeLeft.days} text="Days" />
        <div><img src={Semic} alt='' /></div>
        <CountDownBox number={timeLeft.hours} text="Hours" />
        <div>
          <img src={Semic} alt='' />
        </div>
        <CountDownBox number={timeLeft.minutes} text="Minutes" />
        <div>
          <img src={Semic} alt='' />
        </div>
        <CountDownBox number={timeLeft.seconds} text="Seconds" />
      </div>
    )
  }

  return (
    <div className='pt-38.5'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <SecHead smalltext="Today’s" LargeText="Flash Sales" />
            <div className=' pl-21.75'>
              <CountDown targetDate={"2026-09-27T23:59:59"} />
            </div>
          </div>
          
        </div>
        <div className='py-10 gap-7.5'>
          <Slider {...settings}>
            <div>
              <ContentBox BoxImage={Connt1} Discount="40%" Title="HAVIT HV-G92 Gamepad" Dprice="120" Price="160" Visitor="88" />
            </div>
            <div>
              <ContentBox BoxImage={Connt1} Discount="40%" Title="HAVIT HV-G92 Gamepad" Dprice="120" Price="160" Visitor="88" />
            </div>
            <div>
              <ContentBox BoxImage={Connt1} Discount="40%" Title="HAVIT HV-G92 Gamepad" Dprice="120" Price="160" Visitor="88" />
            </div>
            <div>
              <ContentBox BoxImage={Connt1} Discount="40%" Title="HAVIT HV-G92 Gamepad" Dprice="120" Price="160" Visitor="88" />
            </div>
            <div>
              <ContentBox BoxImage={Connt1} Discount="40%" Title="HAVIT HV-G92 Gamepad" Dprice="120" Price="160" Visitor="88" />
            </div>

          </Slider>

        </div>
        <div className='flex justify-center pb-15 border-b border-[#0000005a]'>
          <button className='w-58.5 h-14 px-12 py-4 rounded-sm bg-[#DB4444] text-white '>View All Products</button>
        </div>
      </Container>
    </div>
  )
}

export default FlashSale
