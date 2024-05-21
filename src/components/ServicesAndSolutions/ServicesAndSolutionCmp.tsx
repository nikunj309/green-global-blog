import React from 'react';
import ServicesCard from './ServicesCard';
import i1 from '@/assets/ServiceAndSolutionCmpImages/image 2.png';
import i2 from '@/assets/ServiceAndSolutionCmpImages/image 3.png';
import i3 from '@/assets/ServiceAndSolutionCmpImages/image 4.png';
import i4 from '@/assets/ServiceAndSolutionCmpImages/image 5.png';

const ServicesAndSolutionCmp = () => {
  return (
    <div className='justify-center items-center'>
      <p className='font-montserrat font-normal text-4xl text-center'>Services & Solutions</p>
      <p className='font-inter font-normal text-xl text-center opacity-50 mt-3'>We offer comprehensive recycling, industry-specific waste management, quality control & sustainability solutions for businesses and corporations</p>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-10'>
        <ServicesCard
          image={i1}
          altName='i1'
          title='Reclaim'
          desc='We prevent tyres from clogging landfills, polluting waterways, and degrading air quality.'
        />
        <ServicesCard
          image={i2}
          altName='i2'
          title='Reclaim'
          desc='We recycle all tyre components, including crumb rubber, into the economy as raw materials.'
        />
        <ServicesCard
          image={i3}
          altName='i3'
          title='Reclaim'
          desc='We assess the scrap tyres we collect and resale high-quality ones on the secondary market.'
        />
        <ServicesCard
          image={i4}
          altName='i4'
          title='Reclaim'
          desc='We make safe, environmentally sustainable goods and materials out of used tyres.'
        />
      </div>
    </div>
  );
};

export default ServicesAndSolutionCmp;
