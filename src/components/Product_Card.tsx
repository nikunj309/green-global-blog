// import React from 'react';
// import Image from 'next/image';

// const Product_Card = ({ imageSrc, altText, title }: any) => {
//   return (
//     <div className="flex flex-col items-center">
//       <Image src={imageSrc} width={300} alt={altText} />
//       <p className="text-center mt-4 text-2xl font-semibold">{title}</p>
//     </div>
//   );
// };

// export default Product_Card;

import React from 'react';
import Image from 'next/image';

const Product_Card = ({ imageSrc, altText, title, description, application }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-neutral-600 mb-2">{description}</p>
        <p className="text-sm text-neutral-500 mb-4"><strong>Application:</strong> {application}</p>
        {/* <button className="mt-auto text-blue-600 hover:underline">Learn More</button> */}
      </div>
    </div>
  );
};

export default Product_Card;
