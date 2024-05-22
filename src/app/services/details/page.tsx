import CommonHeroSectionCard from '@/components/CommonHeroSectionCard'
import imagesrc from "@/assets/ProductScreenImages/modern-equipped-computer-lab.jpg";
import detailspageimage from '@/assets/detailspage.png'
import React from 'react'
import Image from 'next/image';

const page = () => {
    const title = "Services";
    const description = "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices";
    return (
        <>
            <CommonHeroSectionCard
                title={title}
                imageSrc={imagesrc}
                description={description}
            />
            <div className="p-4 md:p-8 flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-semibold mt-4">Rubber Recycling Consultation</p>
                <p className="mt-2 text-gray-700 max-w-[80%]">
                    Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros...
                </p>
                <Image
                    src={detailspageimage}
                    alt='details page image'
                    className="md:w-[50%] w-full h-auto mt-4 rounded-lg shadow-lg"
                />
                <p className="text-xl font-bold mt-6">
                    BEFRIENDING ENVIRONMENT FOR A BETTER TOMORROW
                </p>
                <p className="mt-4 text-gray-700 md:max-w-[80%] leading-relaxed">
                    While humankind has been less kind to the environment, there is rising awareness among the civil society to preserve and conserve the environment for a greener tomorrow. We, at Unity EcoGreen have taken it upon ourselves to adopt methods and techniques that prevent the environment from suffering further damage. This, alongside carrying out developmental projects that contribute towards employment generation and strengthening the economy. We have the will to go the way. That’s why we ideate, create and regenerate- all to strike a balance between development and environment safety. Having garnered appreciation for our efforts and initiatives, we’ve launched a Tyre Recycling Unit to recycle and reuse the rubber waste from used tyres. This one, just another leaf while the Mission continues!
                </p>
                <p className="mt-4 text-gray-700 md:max-w-[80%] leading-relaxed">
                    While humankind has been less kind to the environment, there is rising awareness among the civil society to preserve and conserve the environment for a greener tomorrow. We, at Unity EcoGreen have taken it upon ourselves to adopt methods and techniques that prevent the environment from suffering further damage. This, alongside carrying out developmental projects that contribute towards employment generation and strengthening the economy. We have the will to go the way. That’s why we ideate, create and regenerate- all to strike a balance between development and environment safety. Having garnered appreciation for our efforts and initiatives, we’ve launched a Tyre Recycling Unit to recycle and reuse the rubber waste from used tyres. This one, just another leaf while the Mission continues!
                </p>
            </div>
        </>
    )
}

export default page
