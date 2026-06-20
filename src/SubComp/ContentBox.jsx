import React from 'react'

import Vector from '../assets/Vector.png'
import Eyes from '../assets/Group.png'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";




const ContentBox = ({ BoxImage, Discount, Title, Dprice, Price, Visitor }) => {
  return (
    <div>
      <div className='group'>
        <div className='relative bg-[#F5F5F5] w-67.5 h-62.5'>
          <img className='absolute left-10 top-9' src={BoxImage} alt='' />
          <div className='hidden group-hover:block'>
            <button className='bg-black text-white cursor-pointer w-full h-10.25 leading-6 bottom-0 absolute '> Add To Cart</button>
          </div>
          <div className='absolute flex justify-between w-full p-3'>
            <div className='bg-[#DB4444] w-13.75 h-6.5  rounded-sm'>
              <h6 className='text-center items-center justify-center'>-{Discount}</h6>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
              <div className='bg-white h-8.5 w-8.5 p-2 rounded-full'><FaRegHeart /></div>
              <div className='bg-white h-8.5 w-8.5 p-2 rounded-full'><IoEyeOutline /></div>
            </div>
          </div>
        </div>
        <div>
          <h3>{Title}</h3>
          <div className='flex gap-3'>
            <h5 className='text-[#DB4444]'>${Dprice}</h5>
            <h5 className='font-medium leading-6 text-[#0000006a] line-through'>${Price}</h5>
          </div>
          <div className='flex items-center gap-2'>
            <div className='text-amber-500 flex items-center '>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className='text-[#0000006a] gap-2'>({Visitor})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
