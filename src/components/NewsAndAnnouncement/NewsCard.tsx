import Image from 'next/image';
import React from 'react';

const NewsCard = ({ imageSrc, altText, date, title, description, buttonText, buttonBgColor }: any) => {
  return (
    <div className=" max-w-xs md:max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" />
      </div>
      {/* <p className="bottom-4 w-full md:w-44 md:bottom-8 lg:left-4 lg:bg-[#323232] lg:w-56 lg:font-bold py-2 px-4 rounded shadow-md text-white md:relative lg:absolute lg:z-10">{date}</p> */}
      <div className="p-4 md:p-6">
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-xl font-semibold text-gray-800 mb-2">{title}</p>
        <p className="text-gray-700 text-base">{description}</p>
        <button className={`mt-4 bg-[${buttonBgColor}] hover:bg-[#ffffff] text-white hover:text-black hover:border-2 font-bold py-2 px-4 rounded shadow-md`}>{buttonText}</button>
      </div>
    </div>
  );
};

export default NewsCard;
