import Image from 'next/image'
import React from 'react'
import homeAboutSectionImage from '@/assets/HomeAboutSecionImage.png'
import Link from 'next/link'

const HomeAboutSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            <div className="md:w-1/2 md:pr-6 order-2 md:order-1"> {/* Order changed for smaller screens */}
                <h1 className="text-4xl md:text-5xl font-normal font-montserrat mb-4">Welcome to Green Global Technologies</h1>
                <p className="text-lg md:text-xl font-normal font-montserrat mb-4 opacity-50">We are a Leading Global Tire Management/Recycling Company, Committed to The Environment</p>
                <p className="text-base md:text-lg font-normal font-montserrat mb-4 opacity-50">Welcome to Green Global Technologies, your trusted partner in sustainable tire recycling solutions. We specialize in the responsible disposal and recycling of old and used rubber tires, transforming them into valuable resources like crumb rubber. Our mission is to promote environmental sustainability through innovative recycling practices. Join us in our journey to create a greener planet.</p>
                <Link href='/about'>
                <button className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-[#696464]">
                    Learn more
                </button>
                </Link>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 order-1 md:order-2"> {/* Order changed for smaller screens */}
                <Image src={homeAboutSectionImage} alt="homeAboutSectionImage" className="w-full h-auto object-cover rounded-2xl" />
            </div>
        </div>
    )
}

export default HomeAboutSection
