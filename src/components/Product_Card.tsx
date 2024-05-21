import React from 'react';
import Image from 'next/image';

const Product_Card = ({ imageSrc, altText, title }: any) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imageSrc} width={300} alt={altText} />
      <p className="text-center mt-4 text-2xl font-semibold">{title}</p>
    </div>
  );
};

export default Product_Card;