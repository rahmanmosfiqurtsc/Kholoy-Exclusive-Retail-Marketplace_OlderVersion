import React from 'react'
import Container from './Container'
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <div className='bg-black text-white poppins'>
      <Container>
        <div className='flex justify-between'>
          <div>

          </div>

          <div className='flex justify-between gap-2 items-center'>
            <p className='text-[14px] leading-5.25'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href='#' className='font-semibold text-[14px] leading-6 underline '>ShopNow</a>
          </div>
          <div >
            <a href='#' className='flex gap-1.25 items-center'>English <IoIosArrowDown /></a>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Header
