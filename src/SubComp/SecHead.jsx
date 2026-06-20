import React from 'react'
import Rectangle from '../assets/Rectangle.png'

const SecHead = ({smalltext, LargeText}) => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex gap-4 items-center'>
        <img src={Rectangle} alt='' />
        <h3 className='text-[#DB4444] text-[16px] font-semibold leading-5'>{smalltext}</h3>
      </div>
      <div className='pt-5'>
        <h2 className='text-[#000000] text-[36px] font-semibold leading-12 tracing-[0.04]'>{LargeText}</h2>
      </div>
    </div>
  )
}

export default SecHead
