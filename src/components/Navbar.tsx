import React from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook } from 'react-icons/fa'
import logo from '../../public/green-logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-center py-2 px-6 sm:px-16 bg-neutral-700 text-white'>
        <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-10'>
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt size={20} className='sm:size-30' />
            <div className='text-sm sm:text-base'>
              Green Global Technologies, Moje Pratapnager, Ta:<br />
              Savli, Dis: Vadodara, Gujarat - 391520
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt size={20} className='sm:size-30' />
            <div className='text-sm sm:text-base'>+91 98799 48500</div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaFacebook size={20} className='sm:size-30' />
          <div className='text-sm sm:text-base'>facebook</div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center py-4 px-6 sm:px-28 bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <Image src={logo} alt="Green Global Technologies Logo" width={100} height={50} />
        </div>
        <nav className='flex-1'>
          <ul className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-sm sm:text-lg font-medium'>
            <li>
              <a href="/" className='hover:text-blue-600 hover:underline transition duration-300'>Home</a>
            </li>
            <li>
              <a href="/product" className='hover:text-blue-600 hover:underline transition duration-300'>Product</a>
            </li>
            <li>
              <a href="/services" className='hover:text-blue-600 hover:underline transition duration-300'>Services</a>
            </li>
            <li>
              <a href="/blog" className='hover:text-blue-600 hover:underline transition duration-300'>Blog</a>
            </li>
            <li>
              <a href="/about" className='hover:text-blue-600 hover:underline transition duration-300'>About Us</a>
            </li>
            <li>
              <a href="/contact" className='hover:text-blue-600 hover:underline transition duration-300'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar