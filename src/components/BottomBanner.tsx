import Image from 'next/image'
import React from 'react'
import i1 from '@/assets/Waste-Tyres-website-image.png'

const BottomBanner = () => {
    return (
        <div className="relative w-full h-[500px] mt-8">
            <div className="absolute inset-0 ">
                <Image src={i1} alt='i1' className="w-full h-full object-fill" />
            </div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl md:text-4xl font-normal font-Moul text-center md:max-w-[20%] max-w-[70%]">
                    “Create Real Transformation with a Green Global Technologies”
                </p>
            </div>
        </div>
    )
}

export default BottomBanner
