import React from 'react';
import Image from 'next/image';

const ServicesCard = ({ icon, title, description }: any) => {
  return (
    <div className="relative flex flex-col items-center py-16 m-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image src={icon} width={70} height={70} alt={title} className="mb-4" />
      <h3 className="text-center mt-4 text-2xl font-semibold">{title}</h3>
      <div className="border-b border-black w-16 my-2"></div>
      <p className="text-center m-8">{description}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800 transition duration-300">READ MORE</button>
      <div className="border-decorator">
        <div className="absolute top-0 left-0 m-3 h-1 w-16 bg-black"></div>
        <div className="absolute top-0 left-0 h-16 m-3 w-1 bg-black"></div>
        <div className="absolute bottom-0 right-0 h-1 m-3 w-16 bg-black"></div>
        <div className="absolute bottom-0 right-0 h-16 w-1 m-3 bg-black"></div>
      </div>
    </div>
  );
};

export default ServicesCard;
