"use client"
import CommonHeroSectionCard from '@/components/CommonHeroSectionCard'
import imagesrc from "@/assets/ProductScreenImages/modern-equipped-computer-lab.jpg";
import image1 from '@/assets/serviceDetailsImages/image1.png'
import image2 from '@/assets/serviceDetailsImages/image2.png'
import image3 from '@/assets/serviceDetailsImages/image3.png'
import image4 from '@/assets/serviceDetailsImages/image4.png'
import image5 from '@/assets/serviceDetailsImages/image5.png'
import image6 from '@/assets/serviceDetailsImages/image6.png'
import image7 from '@/assets/serviceDetailsImages/image7.png'
import image8 from '@/assets/serviceDetailsImages/image8.png'
import image9 from '@/assets/serviceDetailsImages/image9.png'
import React from 'react'
import Image from 'next/image';

const services = {
    's1': { title: 'Rubber Recycling Consultation', description: 'At Green Global, we offer expert rubber recycling consultation services to help businesses and municipalities develop effective and sustainable recycling programs. Our team provides tailored advice on collection, processing, and repurposing used tires, ensuring compliance with environmental regulations and maximizing resource efficiency. Partner with us to enhance your recycling efforts and contribute to a greener future.', image:image1 },
    '2': { title: 'Reclaim Rubber Manufacturing', image:image2, description: 'Green Global offers reclaim rubber manufacturing, transforming used tires into high-quality reclaimed rubber. This process involves devulcanizing and repurposing scrap rubber to create a sustainable and cost-effective material for various industrial applications. Reclaimed rubber is commonly used in the production of new tires, rubber mats, footwear, and automotive parts, contributing to reduced waste and environmental impact. Our state-of-the-art facility ensures the highest quality standards, delivering reliable and eco-friendly solutions to our customers.',  },
    '3': { title: 'Rubber Crumb Production', image: image3, description: 'At Green Global, we specialize in producing high-quality rubber crumb from recycled tires. Our state-of-the-art process involves shredding used tires into small granules, which are then refined to remove impurities. The resulting crumb rubber is versatile and environmentally friendly, ideal for use in playground surfaces, sports fields, rubberized asphalt, and various industrial applications. By transforming old tires into valuable resources, we contribute to a sustainable future while reducing waste.',  },
    '4': { title: 'Rubber Chip Manufacturing', image: image4, description: 'Green Global specializes in the production of high-quality rubber chips from recycled tires. Our advanced processing techniques ensure that the rubber chips are durable and versatile, suitable for various applications such as playground surfaces, landscaping mulch, and construction materials. By transforming old tires into valuable rubber chips, we contribute to a more sustainable environment and reduce landfill waste.',  },
    '5': { title: 'Custom Rubber Compounding', image: image5, description: 'At Green Global, we offer specialized custom rubber compounding services tailored to meet your specific needs. Our advanced facilities and experienced team ensure high-quality, consistent, and sustainable rubber compounds made from recycled tires. Whether you need unique formulations for industrial applications, automotive parts, or consumer products, we deliver solutions that enhance performance while promoting environmental responsibility.',  },
    '6': { title: 'Rubber Recycling Equipment Sales', image: image6, description: 'Green Global offers state-of-the-art rubber recycling equipment designed to optimize the recycling process for used tires. Our equipment includes shredders, granulators, and crumb rubber production lines, ensuring efficient and high-quality output. Whether you’re setting up a new recycling facility or upgrading existing machinery, our advanced technology helps you achieve maximum productivity and sustainability in tire recycling.',  },
    '7': { title: 'Rubber Waste Management Solutions', image: image7, description: 'At Green Global, we offer comprehensive Rubber Waste Management Solutions to help businesses and communities responsibly handle and recycle used rubber tires. Our services include:1.	Tire Collection and Transportation: Efficient pick-up and transport of used tires from various locations to our recycling facilities.2.	Tire Shredding and Processing: Advanced shredding and processing techniques to convert old tires into useful materials like crumb rubber and rubber mulch.3.	Custom Recycling Programs: Tailored recycling programs to meet the specific needs of businesses and municipalities.4.	Consulting and Advisory Services: Expert advice on best practices for rubber waste management and compliance with environmental regulations.5.	Eco-Friendly Disposal: Ensuring that all recycling processes minimize environmental impact and promote sustainability.',  },
    '8': { title: 'Projects Advertising', image: image8, description: 'Green Global offers comprehensive advertising services for sustainability projects. We help businesses and organizations showcase their eco-friendly initiatives, particularly those involving rubber recycling and green innovations. Our advertising solutions include digital marketing campaigns, social media promotion, and targeted outreach to industry stakeholders. Partner with us to amplify your impact and highlight your commitment to a greener future.',  },
    '9': { title: 'Projects Installation', image: image9, description: 'Green Global offers comprehensive project installation services for all our recycled rubber products. Our expert team ensures precise and efficient installation, tailored to meet your specific needs. Whether its playground surfaces, rubber pavers, or athletic tracks, we provide end-to-end solutions from site preparation to final inspection, guaranteeing high-quality, durable, and safe installations. Partner with Green Global to transform your spaces sustainably and effectively.',  },
  };

const page = ({params}) => {
    const title = "Services";
    const description = "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices";

    const { slug } = params;
    console.log(slug);
    const service = services[slug];

    if (!slug) {
        return <p>Loading...</p>; // Or a spinner/placeholder component
      }
    
    
      if (!service) {
        return <p>Service not found.</p>;
      }

    return (
        <>
            <CommonHeroSectionCard
                title={title}
                imageSrc={imagesrc}
                description={description}
            />
            <div className="p-4 md:p-8 flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-semibold mt-4">{service.title}</p>
                <Image
                    src={service.image}
                    alt='details page image'
                    className="md:w-[50%] w-full h-auto mt-4 rounded-lg shadow-lg"
                />
                <p className="text-xl font-bold mt-6">
                    BEFRIENDING ENVIRONMENT FOR A BETTER TOMORROW
                </p>
                <p className="mt-4 text-gray-700 md:max-w-[80%] leading-relaxed">
                  {service.description}
                  </p>
            </div>
        </>
    )
}

export default page
