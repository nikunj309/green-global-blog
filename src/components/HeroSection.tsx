import Image from 'next/image'
import React from 'react'
import herobanner from '@/assets/HeroBannersImages/Herobanner.png'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <>
            <div className="absolute inset-0 z-0">
                <Image src={herobanner} alt="herobanner" layout="fill" objectFit="cover" className="opacity-95" />
                <div className="absolute inset-0 bg-white opacity-10"></div>
            </div>
            <div className="relative z-10 text-center text-black">
                <div>
                    <h3 className="text-3xl md:text-5xl font-semibold font-old-standard-tt">Tire</h3>
                    <h1 className="text-6xl md:text-[140px] font-bold font-old-standard-tt">Recycling</h1>
                </div>
                <p className="mt-4 max-w-xl mx-auto text-sm md:text-base font-inter">
                    World-class waste management and environmental protection system
                </p>
                <p className="text-sm md:text-base font-inter">that benefits both the community</p>
                <p className="text-sm md:text-base font-inter">and the environment</p>
                <Link href='/services'>
                <button className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-[#696464]">
                    Explore
                </button>
                </Link>
            </div>
        </>
    )
}

export default HeroSection