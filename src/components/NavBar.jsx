import React from 'react'
import Container from './Container'
import Logo from '../assets/Exclusive.png'
import { CiSearch } from "react-icons/ci"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";




const NavBar = () => {
  return (
    <div className='border-b border-[#000000]'>
      <Container>
        <nav className='flex justify-between poppins items-center py-8.75'>
          <div>
            <img src={Logo} alt='' href='#' />
          </div>
          <div>
            <ul className='flex list-none gap-12 leading-6 slides'>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div className='flex gap-6 items-center'>
          <div className='relative py-1.75 pl-5 pr-3 bg-[#F5F5F5] rounded-sm gap-8.5 w-60.75'>
            <input type='text' placeholder='What are you looking for?' />
            <CiSearch className='absolute top-2 right-3 text-2xl' />

          </div>
          <div className='flex gap-4'>
            <CiHeart className='text-2xl' />
            <IoCartOutline className='text-2xl' />
          </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default NavBar
