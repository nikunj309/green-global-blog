// import React from 'react';

// import crumb from '@/assets/ProductScreenImages/image.png';
// import rubber from '@/assets/ProductScreenImages/Rubber_Mulch.png';
// import tire from '@/assets/ProductScreenImages/tire-derived-fuel.png';
// import imagesrc from "@/assets/ProductScreenImages/modern-equipped-computer-lab.jpg";
// import CommonHeroSectionCard from '@/components/CommonHeroSectionCard';
// import Product_Card from '@/components/Product_Card';

// const page = () => {
//   const products = [
//     { imageSrc: crumb, altText: 'Crumb Rubber Granules', title: 'Crumb Rubber Granules' },
//     { imageSrc: tire, altText: 'Tire Derived Fuel', title: 'Tire Derived Fuel' },
//     { imageSrc: rubber, altText: 'Rubber Mulch', title: 'Rubber Mulch' },
//     { imageSrc: crumb, altText: 'Crumb Rubber Granules', title: 'Crumb Rubber Granules' },
//     { imageSrc: tire, altText: 'Tire Derived Fuel', title: 'Tire Derived Fuel' },
//     { imageSrc: rubber, altText: 'Rubber Mulch', title: 'Rubber Mulch' },
//     { imageSrc: crumb, altText: 'Crumb Rubber Granules', title: 'Crumb Rubber Granules' },
//     { imageSrc: tire, altText: 'Tire Derived Fuel', title: 'Tire Derived Fuel' },
//     { imageSrc: rubber, altText: 'Rubber Mulch', title: 'Rubber Mulch' },
//   ];

//   const title = "Product";
//   const description = "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices"; 

//   return (
//     <>
//       <CommonHeroSectionCard title={title} imageSrc={imagesrc} description={description} />
//       <main className="flex justify-center items-center flex-col p-8">
//         <div className="text-center mb-8">
//           <h1 className="font-bold text-3xl mb-4">
//             Our Product Range
//           </h1>
//           <p className="text-lg">
//             The long-lasting attributes of recycled rubber bring quality and
//             safety to our various products while helping us achieve our
//             conservation goals.
//           </p>
//         </div>
//         <div className="w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <Product_Card
//                 key={index}
//                 imageSrc={product.imageSrc}
//                 altText={product.altText}
//                 title={product.title}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default page;

import React from 'react';

import crumb from '@/assets/tirebg.jpg';
import rubber from '@/assets/old-used-tires-huge-number-car-tires-recycling-generative-ai_773085-1022.jpg';
import image3 from '@/assets/ProductScreenImages/crumb_rubber_granules.png';
// import image4 from '@/assets/ProductScreenImages/image4.png';
// import image5 from '@/assets/ProductScreenImages/image5.png';
// import image6 from '@/assets/ProductScreenImages/image6.png';
// import image7 from '@/assets/ProductScreenImages/image7.png';
// import image8 from '@/assets/ProductScreenImages/image8.png';
// import image9 from '@/assets/ProductScreenImages/image9.png';
// import image10 from '@/assets/ProductScreenImages/image10.png';
import tire from '@/assets/ProductScreenImages/tire-derived-fuel.png';
import imagesrc from "@/assets/ProductScreenImages/modern-equipped-computer-lab.jpg";
import CommonHeroSectionCard from '@/components/CommonHeroSectionCard';
import Product_Card from '@/components/Product_Card';

const page = () => {
  const products = [
    {
      imageSrc: crumb,
      altText: 'Old and used rubber tyre',
      title: 'Old and used rubber tyre',
      description: 'Fine granules of rubber produced from recycled tires, used in a variety of applications.',
      application: ' Playground surfaces, athletic tracks, landscaping mulch, rubberized asphalt, and molded products.'
    },
    {
      imageSrc: rubber,
      altText: 'Old and used rubber tyre scrap',
      title: 'Old and used rubber tyre scrap',
      description: 'Durable and eco-friendly mulch made from shredded recycled tires.',
      application: 'Landscaping, playgrounds, and garden beds.'
    },
    {
      imageSrc: image3,
      altText: 'Used tyre scrap- crumb rubber',
      title: 'Used tyre scrap rubber crimbs',
      description: 'Durable and slip-resistant pavers made from recycled rubber.',
      application: 'Outdoor walkways, driveways, patios, and playgrounds.'
    },
    // {
    //   imageSrc: image4,
    //   altText: 'Rubber Mats',
    //   title: 'Rubber Mats',
    //   description: 'Heavy-duty mats made from recycled tires, offering cushioning and durability.',
    //   application: 'Gyms, horse stables, industrial settings, and anti-fatigue mats.'
    // },
    // {
    //   imageSrc: image5,
    //   altText: 'Rubberized Asphalt',
    //   title: 'Rubberized Asphalt',
    //   description: 'Asphalt mixed with crumb rubber to create a more flexible and durable surface.',
    //   application: 'Roadways, parking lots, and driveways.'
    // },
    // {
    //   imageSrc: image6,
    //   altText: 'Playground Surfaces',
    //   title: 'Playground Surfaces',
    //   description: 'Safe and impact-absorbing surfaces made from recycled rubber.',
    //   application: 'Playgrounds, sports fields, and recreational areas'
    // },
    // {
    //   imageSrc: image7,
    //   altText: 'Tire-Derived Fuel (TDF)',
    //   title: 'Tire-Derived Fuel (TDF)',
    //   description: 'Fuel made from shredded tires, used as an alternative energy source.',
    //   application: 'Cement kilns, paper mills, and power plants.'
    // },
    // {
    //   imageSrc: image8,
    //   altText: 'Equestrian Arena Footing',
    //   title: 'Equestrian Arena Footing',
    //   description: 'Soft and durable footing material for horse arenas, made from recycled rubber.',
    //   application: 'Equestrian centers and riding arenas.'
    // },
    // {
    //   imageSrc: image9,
    //   altText: 'Rubber Borders and Edging',
    //   title: 'Rubber Borders and Edging',
    //   description: 'Flexible and durable borders made from recycled rubber.',
    //   application: 'Landscaping, playgrounds, and garden beds'
    // },
    // {
    //   imageSrc: image10,
    //   altText: 'Molded Rubber Products',
    //   title: 'Molded Rubber Products',
    //   description: 'Custom-molded products made from recycled rubber',
    //   application: 'Automotive parts, industrial components, and consumer goods.'
    // },
  ];

  const title = "Product";
  const description = "Transforming tires into sustainable solutions for a greener future."; 

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
                description={product.description}
                application={product.application}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
