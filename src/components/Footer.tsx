// import Image from 'next/image';
// import React from 'react';
// import i1 from '../../public/green-logo.png';

// const Footer = () => {
//     return (
//         <>
//             <div className='bg-black p-9'>
//                 <div className='flex justify-between items-center py-4 px-6 sm:px-28 shadow-md hover:shadow-lg transition-shadow duration-300'>
//                     <div className='flex items-center'>
//                         <Image src={i1} alt="Green Global Technologies Logo" width={100} height={50} />
//                     </div>
//                     <nav className='text-white'>
//                         <ul className='flex gap-4 sm:gap-10 text-sm sm:text-lg font-medium'>
//                             <li>
//                                 <a href="#home" className='hover:text-blue-600 hover:underline transition duration-300'>Home</a>
//                             </li>
//                             <li>
//                                 <a href="#product" className='hover:text-blue-600 hover:underline transition duration-300'>Product</a>
//                             </li>
//                             <li>
//                                 <a href="#services" className='hover:text-blue-600 hover:underline transition duration-300'>Services</a>
//                             </li>
//                             <li>
//                                 <a href="#blog" className='hover:text-blue-600 hover:underline transition duration-300'>Blog</a>
//                             </li>
//                             <li>
//                                 <a href="#about-us" className='hover:text-blue-600 hover:underline transition duration-300'>About Us</a>
//                             </li>
//                             <li>
//                                 <a href="#contact" className='hover:text-blue-600 hover:underline transition duration-300'>Contact</a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className='bg-white h-0.5 mx-14'></div>

//                 <div className='flex flex-row justify-center  mt-12 px-20 '>
//                     <div className=' text-white'>
//                         <p className='font-medium font-inter text-2xl'>What we Offer</p>
//                         <div className='bg-[#323232] h-1 w-24 mt-1'></div>
//                         <p className='font-normal opacity-45 font-inter text-xs mt-6 w-[50%]'>World-class waste management and environmental protection system that benefits both the community and the environment</p>
//                         <button className={`mt-8 bg-[#323232] hover:bg-[#ffffff] text-white hover:text-black hover:border-2 font-bold py-2 px-4 rounded shadow-md`}>Contact Now</button>

//                     </div>
//                     <div className=' text-white'>
//                         <p className='font-medium font-inter text-2xl'>Contact Us</p>
//                         <div className='bg-[#323232] h-1 w-24 mt-1'></div>
//                         <p className='font-normal opacity-45 font-inter text-xs mt-6'>+91 98799 48500</p>
//                         <p className='font-normal opacity-45 font-inter text-xs mt-6'>info@greenglobaltechnologies.in</p>
//                         <p className='font-normal opacity-45 font-inter text-xs mt-6 w-[50%]'>Green Global Technologies, Moje Pratapnagar, Ta: Savli, Dis: Vadodara, Gujarat - 391520</p>
//                     </div>
//                     <div className=' text-white'>
//                         <p className='font-medium font-inter text-2xl'>Gallery</p>
//                         <div className='bg-[#323232] h-1 w-24 mt-1'></div>
//                         <div className='flex flex-wrap gap-2 mt-4'>
//                             {/* First row */}
//                             <div className='w-14 h-14 bg-white rounded-md'></div>
//                             <div className='w-14 h-14 bg-white rounded-md'></div>
//                             <div className='w-14 h-14 bg-white rounded-md'></div>
//                             <div className='w-14 h-14 bg-white rounded-md'></div>
//                             <div className='w-14 h-14 bg-white rounded-md'></div>
//                             <div className='w-14 h-14 bg-white rounded-md'></div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className='bg-[#171717]'>
//                 <div className='bg-white h-0.5'></div>
//                 <p className='text-base font-normal font-inter py-2 items-center text-white text-center mt-2'>2024 @ Copyright - All Rights Reserved</p>
//             </div>
//         </>
//     )
// }

// export default Footer;


import Image from 'next/image';
import React from 'react';
import i1 from '../../public/green-logo.png';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className='bg-black p-9 sm:w-full'>
                <div className='flex flex-col sm:flex-row justify-between items-center py-4 px-6 sm:px-28 shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <div className='flex items-center mb-4 sm:mb-0'>
                        <Image src={i1} alt="Green Global Technologies Logo" width={100} height={50} />
                    </div>
                    <nav className='text-white'>
                        <ul className='flex flex-row sm:flex-row justify-center gap-4 sm:gap-10 text-sm sm:text-lg font-medium'>
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
                    </nav>
                </div>
                <div className='bg-white h-0.5 mx-14'></div>
                <div className='flex flex-col sm:flex-row justify-center mt-12 px-4 sm:px-20'>
                    {/* Section 1: What we Offer */}
                    <div className='flex flex-col text-white mb-8 sm:mr-8'>
                        <p className='font-medium font-inter text-xl sm:text-2xl mb-2'>What we Offer</p>
                        <div className='bg-[#323232] h-1 w-24 mb-2'></div>
                        <p className='font-normal opacity-45 font-inter text-xs sm:text-sm w-[80%] mb-4'>World-class waste management and environmental protection system that benefits both the community and the environment</p>
                        <Link href='/contact'>
                        <button className={`bg-[#323232] w-48 hover:bg-[#ffffff] text-white hover:text-black hover:border-2 font-bold py-2 px-4 rounded shadow-md`}>Contact Now</button>
                        </Link>
                    </div>
                    {/* Section 2: Contact Us */}
                    <div className='flex flex-col text-white mb-8 sm:mr-8'>
                        <p className='font-medium font-inter text-xl sm:text-2xl mb-2'>Contact Us</p>
                        <div className='bg-[#323232] h-1 w-24 mb-2'></div>
                        <p className='font-normal opacity-45 font-inter text-xs sm:text-sm w-full '>+91 98799 48500</p>
                        <p className='font-normal opacity-45 font-inter text-xs mt-4'>info@greenglobaltechnologies.in</p>
                        <p className='font-normal opacity-45 font-inter text-xs mt-4 w-[50%]'>Green Global Technologies, Moje Pratapnagar, Ta: Savli, Dis: Vadodara, Gujarat - 391520</p>
                        <div className='flex items-center gap-6 mt-3'>
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
                    </div>
                    {/* Section 3: Gallery */}
                    <div className='flex flex-col text-white'>
                        <p className='font-medium font-inter text-xl sm:text-2xl mb-2'>Gallery</p>
                        <div className='bg-[#323232] h-1 w-24 mb-2'></div>
                        <div className='flex flex-wrap gap-2'>
                            {/* Add gallery images */}
                            <div className='w-14 h-14 bg-white rounded-md'></div>
                            <div className='w-14 h-14 bg-white rounded-md'></div>
                            <div className='w-14 h-14 bg-white rounded-md'></div>
                            <div className='w-14 h-14 bg-white rounded-md'></div>
                            <div className='w-14 h-14 bg-white rounded-md'></div>
                            <div className='w-14 h-14 bg-white rounded-md'></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className='bg-[#171717]'>
                <div className='bg-white h-0.5'></div>
                <p className='text-base font-normal font-inter py-2 items-center text-white text-center mt-2'>2024 @ Copyright - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer;
