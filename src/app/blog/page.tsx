import CommonHeroSectionCard from '@/components/CommonHeroSectionCard'
import imagesrc from "@/assets/ContactPageImages/90_1.png";
import imagesrc1 from "@/assets/ProductScreenImages/tire-derived-fuel.png";

import React from 'react'
import InfoCard from '@/components/blogPageCmp/InfoCard';
import { FaSearch } from 'react-icons/fa';

const page = () => {
    return (
        <div>
            <CommonHeroSectionCard
                title='Blog'
                imageSrc={imagesrc}
                description='Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices'
            />
            <div className='flex-row flex'>
                <div className='p-3 flex-col gap-5 my-3 md:w-3/5'>
                    <InfoCard
                        imagesrc={imagesrc1}
                        altText="Blog Image"
                        title="Environment"
                        subtitle="Flank jerky cow sirloin strip steak t-bone bacon"
                        description="Spare ribs kevin pork loin magna, adipisicing culpa consectetur meatball dolore doner ham tri-tip sunt kielbasa est. Culpa incididunt tri-tip, porchetta officia occaecat cupidatat swine…"

                    />
                    <InfoCard
                        imagesrc={imagesrc1}
                        altText="Blog Image"
                        title="Environment"
                        subtitle="Flank jerky cow sirloin strip steak t-bone bacon"
                        description="Spare ribs kevin pork loin magna, adipisicing culpa consectetur meatball dolore doner ham tri-tip sunt kielbasa est. Culpa incididunt tri-tip, porchetta officia occaecat cupidatat swine…"

                    />
                    <InfoCard
                        imagesrc={imagesrc1}
                        altText="Blog Image"
                        title="Environment"
                        subtitle="Flank jerky cow sirloin strip steak t-bone bacon"
                        description="Spare ribs kevin pork loin magna, adipisicing culpa consectetur meatball dolore doner ham tri-tip sunt kielbasa est. Culpa incididunt tri-tip, porchetta officia occaecat cupidatat swine…"

                    />
                </div>


                <div className="flex flex-col items-start p-4 border-2 h-32 border-[#323232] w-full md:w-96 mx-auto">
                    <label htmlFor="search" className="mb-2 text-lg font-semibold text-gray-700">Search</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="search"
                            className="w-full p-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
