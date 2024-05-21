import React from 'react';

const ComponyDetailsCard = ({ number, title, description }: any) => {
  return (
    <div className="bg-[#323232] rounded-tl-15 rounded-tr-0 rounded-br-0 rounded-bl-0 w-72 h-80 flex flex-col justify-center items-center p-6">
      <p className="text-white text-8xl font-bold mb-4 font-inter md:text-6xl sm:text-4xl">{number}</p>
      <p className="text-white text-2xl font-normal mb-4 font-inter md:text-xl sm:text-lg">{title}</p>
      <p className="text-white text-base font-light font-inter text-center opacity-50 md:text-sm sm:text-xs">{description}</p>
    </div>
  );
};

export default ComponyDetailsCard;
