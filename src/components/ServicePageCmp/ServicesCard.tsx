import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesCard = ({ icon, title, description, slug }: any) => {


  return (
    <div className="relative flex flex-col items-center py-3 m-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image src={icon} width={70} height={70} alt={title} className="mb-4" />
      <h3 className="text-center mt-4 text-2xl font-semibold">{title}</h3>
      <div className="border-b border-black w-16 my-2"></div>
      <p className="text-center m-12">{description}</p>
      <div className=" absolute z-10 bottom-2">
        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800 transition duration-300">READ MORE</button>
        </Link>
      </div>
      <div className="border-decorator">
        <div className="absolute top-0 left-0 m-3 h-1 w-12 bg-black"></div>
        <div className="absolute top-0 left-0 h-12 m-3 w-1 bg-black"></div>
        <div className="absolute bottom-0 right-0 h-1 m-3 w-12 bg-black"></div>
        <div className="absolute bottom-0 right-0 h-12 w-1 m-3 bg-black"></div>
      </div>
    </div>

  );
};

export default ServicesCard;
