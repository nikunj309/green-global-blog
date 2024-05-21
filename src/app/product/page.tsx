import React from 'react';

import crumb from '@/assets/ProductScreenImages/crumb_rubber_granules.png';
import rubber from '@/assets/ProductScreenImages/Rubber_Mulch.png';
import tire from '@/assets/ProductScreenImages/tire-derived-fuel.png';
import imagesrc from "@/assets/ProductScreenImages/modern-equipped-computer-lab.jpg";
import CommonHeroSectionCard from '@/components/CommonHeroSectionCard';
import Product_Card from '@/components/Product_Card';

const page = () => {
  const products = [
    { imageSrc: crumb, altText: 'Crumb Rubber Granules', title: 'Crumb Rubber Granules' },
    { imageSrc: tire, altText: 'Tire Derived Fuel', title: 'Tire Derived Fuel' },
    { imageSrc: rubber, altText: 'Rubber Mulch', title: 'Rubber Mulch' },
    { imageSrc: crumb, altText: 'Crumb Rubber Granules', title: 'Crumb Rubber Granules' },
    { imageSrc: tire, altText: 'Tire Derived Fuel', title: 'Tire Derived Fuel' },
    { imageSrc: rubber, altText: 'Rubber Mulch', title: 'Rubber Mulch' },
    { imageSrc: crumb, altText: 'Crumb Rubber Granules', title: 'Crumb Rubber Granules' },
    { imageSrc: tire, altText: 'Tire Derived Fuel', title: 'Tire Derived Fuel' },
    { imageSrc: rubber, altText: 'Rubber Mulch', title: 'Rubber Mulch' },
  ];

  const title = "Product";
  const description = "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices"; 

  return (
    <>
      <CommonHeroSectionCard title={title} imageSrc={imagesrc} description={description} />
      <main className="flex justify-center items-center flex-col p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl mb-4">
            Our Product Range
          </h1>
          <p className="text-lg">
            The long-lasting attributes of recycled rubber bring quality and
            safety to our various products while helping us achieve our
            conservation goals.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Product_Card
                key={index}
                imageSrc={product.imageSrc}
                altText={product.altText}
                title={product.title}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;