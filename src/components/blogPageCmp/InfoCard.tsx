import React from 'react';
import Image from 'next/image';

const InfoCard = ({ imagesrc, altText, title, subtitle, description }: any) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:w-[55%] mb-5 md:items-start shadow-2xl">
      <div className="md:w-96 w-full">
        <Image src={imagesrc} alt={altText} className="" />
      </div>
      <div className="md:w-96 w-full mt-6 md:mt-4 items-center justify-center">
        <p className="text-sm font-semibold font-sans text-[#323232]">{title}</p>
        <p className="mt-2 text-lg font-bold font-sans text-[#323232]">
          {subtitle}
        </p>
        <p className="mt-2 text-gray-700 font-light">
          {description}
        </p>
        <button className="mt-4 bg-[#323232] hover:bg-[#ffffff] text-white hover:text-black hover:border-2 font-bold py-2 px-4 rounded shadow-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
