// import React from 'react'
// import Image from 'next/image'
// import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa'
// import logo from '../../public/green-logo.png'
// import { FaXTwitter } from 'react-icons/fa6'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:flex-row justify-between items-center py-2 px-6 sm:px-16 bg-neutral-700 text-white'>
//         <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-10'>
//           <div className='flex items-center gap-2'>
//             <FaMapMarkerAlt size={20} className='sm:size-30' />
//             <div className='text-sm sm:text-base'>
//               Green Global Technologies, Moje Pratapnager, Ta:<br />
//               Savli, Dis: Vadodara, Gujarat - 391520
//             </div>
//           </div>
//           <div className='flex items-center gap-2'>
//             <FaPhoneAlt size={20} className='sm:size-30' />
//             <div className='text-sm sm:text-base'>+91 98799 48500</div>
//           </div>
//         </div>
//         <div className='flex items-center gap-6'>
//           <Link href='https://www.facebook.com/profile.php?id=61558428737488'>
//             <FaFacebook size={20} className='sm:size-30' />
//           </Link>
//           <Link href='https://www.instagram.com/greenglobaltechnologies/'>
//             <FaInstagram size={20} className='sm:size-30' />
//           </Link>
//           <Link href='https://twitter.com/greenglobaltech'>
//             <FaXTwitter size={20} className='sm:size-30' />
//           </Link>
//           {/* <div className='text-sm sm:text-base'>facebook</div> */}
//         </div>
//       </div>
//       <div className='flex flex-col sm:flex-row justify-between items-center py-4 px-6 sm:px-28 bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
//         <div className='flex items-center mb-4 sm:mb-0'>
//           <Image src={logo} alt="Green Global Technologies Logo" width={100} height={50} />
//         </div>
//         <nav className='flex-1'>
//           <ul className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-sm sm:text-lg font-medium'>
//             <li>
//               <a href="/" className='hover:text-blue-600 hover:underline transition duration-300'>Home</a>
//             </li>
//             <li>
//               <a href="/product" className='hover:text-blue-600 hover:underline transition duration-300'>Product</a>
//             </li>
//             <li>
//               <a href="/services" className='hover:text-blue-600 hover:underline transition duration-300'>Services</a>
//             </li>
//             <li>
//               <a href="/post" className='hover:text-blue-600 hover:underline transition duration-300'>Blog</a>
//             </li>
//             <li>
//               <a href="/about" className='hover:text-blue-600 hover:underline transition duration-300'>About Us</a>
//             </li>
//             <li>
//               <a href="/contact" className='hover:text-blue-600 hover:underline transition duration-300'>Contact</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default Navbar

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import logo from '../../public/green-logo.png';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* <div className='flex flex-col sm:flex-row justify-between items-center py-2 px-6 sm:px-16 bg-neutral-700 text-white'> */}
       
        {/* <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-10'>
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
         <div className='flex items-center gap-6'>
           <Link href='https://www.facebook.com/profile.php?id=61558428737488'>
             <FaFacebook size={20} className='sm:size-30' />
           </Link>
           <Link href='https://www.instagram.com/greenglobaltechnologies/'>
             <FaInstagram size={20} className='sm:size-30' />
           </Link>
           <Link href='https://twitter.com/greenglobaltech'>
             <FaXTwitter size={20} className='sm:size-30' />
           </Link>
         </div>
      </div> */}
      <div className='flex flex-row sm:flex-row justify-between items-center py-4 px-6 sm:px-28 bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <Image src={logo} alt="Green Global Technologies Logo" width={100} height={50} />
        </div>
        {/* Conditional rendering for hamburger menu */}
        <nav className='sm:flex-1 sm:justify-center sm:items-center hidden md:block'>
          <ul className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-sm sm:text-lg font-medium'>
            <li>
              <a href="/" className='hover:text-blue-600 hover:underline transition duration-300 '>Home</a>
            </li>
            <li>
              <a href="/product" className='hover:text-blue-600 hover:underline transition duration-300'>Product</a>
            </li>
            <li>
              <a href="/services" className='hover:text-blue-600 hover:underline transition duration-300'>Services</a>
            </li>
            <li>
              <a href="/post" className='hover:text-blue-600 hover:underline transition duration-300'>Blog</a>
            </li>
            <li>
              <a href="/about" className='hover:text-blue-600 hover:underline transition duration-300'>About Us</a>
            </li>
            <li>
              <a href="/contact" className='hover:text-blue-600 hover:underline transition duration-300'>Contact</a>
            </li>
          </ul>
        </nav>
        <FaBars size={24} onClick={toggleMenu} className='cursor-pointer sm:hidden' />
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='sm:hidden'>
          <ul className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-sm sm:text-lg font-medium'>
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
              <a href="/post" className='hover:text-blue-600 hover:underline transition duration-300'>Blog</a>
            </li>
            <li>
              <a href="/about" className='hover:text-blue-600 hover:underline transition duration-300'>About Us</a>
            </li>
            <li>
              <a href="/contact" className='hover:text-blue-600 hover:underline transition duration-300'>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
