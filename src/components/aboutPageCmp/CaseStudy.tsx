import React from 'react';
import Image from 'next/image';

const CaseStudyCard = ({ imageSrc, title, description }: any) => (
    <div className="relative bg-white rounded-lg mb-12 shadow-lg">
        <Image src={imageSrc} alt={title} className="w-full h-80 object-cover" />
        <div className="absolute bottom-[-20%] left-3 right-3 bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-[#003D4D] text-lg font-semibold text-center">{title}</h2>
            <p className="text-gray-700 mt-4 text-xs text-center">{description}</p>
        </div>
    </div>
);

export default CaseStudyCard