import Image from 'next/image'
import React from 'react'


const ServicesCard = ({image, altName, title, desc}: any) => {
    return (
        <div className='w-64 h-64 items-center justify-center text-center'>
            <div className='items-center text-center justify-center flex' >
                <Image src={image} alt={altName} />
            </div>
            <p className='font-montserrat font-light text-[32px] text-center mt-5 '>{title}</p>
            <p className='font-inter font-normal text-sm text-center mt-5 opacity-50'>{desc}</p>
        </div>
    )
}

export default ServicesCard
