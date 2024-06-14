import CommonHeroSectionCard from '@/components/CommonHeroSectionCard';
import Image from 'next/image';
import React from 'react'


import stare from "@/assets/aboutpageImages/stare.png";
import imagesrc from "@/assets/aboutpageImages/Hero_sec.png";
import icon_left from "@/assets/aboutpageImages/icon_left.png";

import casestudy_1 from "@/assets/aboutpageImages/image1.png"
import image4 from "@/assets/aboutpageImages/image4.png"
import image5 from "@/assets/aboutpageImages/image5.png"
import image6 from "@/assets/aboutpageImages/image6.png"
import image7 from "@/assets/aboutpageImages/image7.png"
import casestudy_2 from "@/assets/aboutpageImages/image2.png"
import casestudy_3 from "@/assets/aboutpageImages/image3.png"
import CaseStudyCard from '@/components/aboutPageCmp/CaseStudy';

const page = () => {

  const caseStudies = [
    {
      imageSrc: casestudy_1,
      title: 'Sustainable Playground Renovation',
      description: 'Green Global collaborated with a local community to renovate a playground using sustainable materials. Old rubber tires were recycled into rubber mulch and safety tiles, providing a safe and eco-friendly play surface for children. The project not only reduced waste but also created a vibrant and sustainable recreational space for the community to enjoy.',
    },
    {
      imageSrc: casestudy_2,
      title: 'Rubberized Asphalt Road Resurfacing',
      description: 'In partnership with a municipal authority, Green Global implemented a project to resurface roads using rubberized asphalt. Recycled rubber from tires was incorporated into the asphalt mix, resulting in a more durable and flexible road surface. This innovative approach not only extended the lifespan of the roads but also reduced maintenance costs and improved safety for motorists.',
    },
    {
      imageSrc: casestudy_3,
      title: 'Eco-Friendly Landscaping for Corporate Campus',
      description: 'Green Global worked with a corporate client to develop an eco-friendly landscaping plan for their campus. Recycled rubber products such as rubber mulch, pavers, and edging were used to create sustainable and low-maintenance outdoor spaces. The project enhanced the aesthetics of the campus while promoting environmental sustainability through responsible tire recycling practices.',
    },
  ];

  const title = "About Global Green Technology";
  const description =
    "Welcome to Global Green Technology, where innovation meets sustainability. Established with a vision to revolutionize the rubber recycling industry, we have grown from humble beginnings to become a leading manufacturer of eco-friendly rubber products.";

  return (
    <>
      <CommonHeroSectionCard
        title={title}
        imageSrc={imagesrc}
        description={description}
      />
      <main className="flex justify-center items-center flex-col p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1 p-10 bg-[#DDDDDD] shadow-lg">
            <div className="flex">
              <div className="border-l-4 border-r-2 border-[#003D4D] mb-4 py-1 px-4">
                <p className="text-xl font-bold text-[#323232]">
                  About Global Green Technology
                </p>
              </div>
            </div>
            <div className="mb-8 text-[#003D4D] font-extrabold text-5xl">
              Leading <br /> Company For Over 20+ <br /> Years.
            </div>
            <div className="flex bg-[#003D4D]  p-4">
              <div className="mr-4">
                <Image src={icon_left} alt='left icon' />
              </div>
              <div className="border-l-2 border-white pl-4">
                <p className="text-lg text-white m-2">
                  <span className="text-orange-600">#1</span> Best Service
                </p>
                <p className="text-lg text-[#FFFFFFCC] m-2">
                  2022 National Best Service Award
                </p>
                <p className="text-lg text-white flex items-center m-2">
                  <Image src={stare} width={20} height={10} alt='stare' />
                  4.8/5 for the{" "}
                  <span className="text-orange-600">Recycle </span> services
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 p-4">
              <span className="text-white px-4 py-1 bg-orange-400 m-2">
                About us
              </span>
              <p className='text-sm md:text-base flex-wrap'>
                Welcome to Green Global, your trusted partner in sustainable tire recycling solutions. We are committed to reducing the environmental impact of used rubber tires by recycling and repurposing them into valuable products. Our state-of-the-art facilities and innovative processes ensure that every tire we handle is transformed into high-quality materials like crumb rubber, rubber mulch, and rubberized asphalt.
                <br /><br />
                At Green Global, sustainability is at the core of everything we do. We believe in promoting a circular economy where resources are reused and repurposed, minimizing waste and conserving natural resources. Our team of dedicated experts is passionate about environmental stewardship and strives to make a positive impact on our planet.
                <br /><br />
                Through our efforts, we aim to not only provide eco-friendly products but also raise awareness about the importance of tire recycling and sustainable practices. Join us in our mission to create a cleaner, greener world for generations to come.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-28 m-10">
          <p className="text-gray-800 text-xl font-bold text-center">Case Studies</p>
          <h1 className="text-[#003D4D] text-4xl font-extrabold my-4 text-center">Recently Completed Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                imageSrc={study.imageSrc}
                title={study.title}
                description={study.description}
              />
            ))}
          </div>
        </section>


        <p>Challenges are just opportunities in disguise. Take the challenge</p>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1">
            {/* <div className="w-full  px-20  py-16"> */}
            <Image src={image4} alt='image4' className='w-full px-7 py-10 max-w-200 max-h-200' />
            <Image src={image5} alt='image5' className='w-full px-7 py-10 max-w-200 max-h-200' />
            <Image src={image6} alt='image6' className='w-full px-7 py-10 max-w-200 max-h-200' />
            <Image src={image7} alt='image7' className='w-full px-7 py-10 max-w-200 max-h-200' />

            {/* </div> */}
            {/* <div className="w-full bg-[#9F9F9F] px-20 py-16"></div>
            <div className="w-full bg-[#9F9F9F] px-20 py-16"></div>
            <div className="w-full bg-[#9F9F9F] px-20 py-16"></div> */}
          </div>
          <div className="flex-1 p-8">
            <p className="text-[#A4A4A4] text-lg mb-2">
              MAJOR AND BEST
            </p>
            <h1 className="text-black font-bold text-4xl mb-4">
              OUR CLIENTS
            </h1>
            <p className="text-[#A4A4A4] mb-4 mt-10">
              Our experience working with Green Global has been nothing short of exceptional. Their dedication to sustainability and tire recycling is truly commendable. Not only did they provide us with high-quality recycled rubber products for our playground renovation project, but they also went above and beyond to ensure that the entire process was eco-friendly and efficient.
              The team at Green Global was professional, knowledgeable, and passionate about what they do. They guided us through every step of the project, from product selection to installation, ensuring that we got the best results possible. The end result exceeded our expectations, and our newly renovated playground has become a favorite among children and parents alike.

            </p>

            <p className="text-black border-l-4 p-2 border-[#FCCA03] font-semibold mt-10">
              We highly recommend Green Global to anyone looking for sustainable solutions in rubber tire recycling. Their commitment to environmental responsibility and their top-notch products make them a trusted partner in creating a greener future
            </p>
          </div>
        </div>
      </main >
    </>
  )
}

export default page
