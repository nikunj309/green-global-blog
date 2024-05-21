import Image from 'next/image'
import React from 'react'
import homeAboutSectionImage from '@/assets/HomeAboutSecionImage.png'

const HomeAboutSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            <div className="md:w-1/2 md:pr-6 order-2 md:order-1"> {/* Order changed for smaller screens */}
                <h1 className="text-4xl md:text-5xl font-normal font-montserrat mb-4">Welcome to Green Global Technology</h1>
                <p className="text-lg md:text-xl font-normal font-montserrat mb-4 opacity-50">We are a Leading Global Tire Management/Recycling Company, Committed to The Environment</p>
                <p className="text-base md:text-lg font-normal font-montserrat mb-4 opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa ligula, aliquet euismod eleifend vitae, interdum ut mi. Praesent fringilla pharetra sapien sit amet semper. Nunc id massa ut mi tempus mattis ac eu lectus.</p>
                <button className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-blue-700">
                    Learn more
                </button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 order-1 md:order-2"> {/* Order changed for smaller screens */}
                <Image src={homeAboutSectionImage} alt="homeAboutSectionImage" className="w-full h-auto object-cover rounded-2xl" />
            </div>
        </div>
    )
}

export default HomeAboutSection
