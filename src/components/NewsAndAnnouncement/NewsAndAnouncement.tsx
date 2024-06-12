import Image from 'next/image';
import i1 from '@/assets/NewsAndAnnouncement/image 6.png';
import i2 from '@/assets/NewsAndAnnouncement/image 7.png';
import i3 from '@/assets/NewsAndAnnouncement/Rectangle 70.png';
import NewsCard from './NewsCard';

const NewsAndAnouncement = () => {
    return (
        <div className='justify-center items-center mt-8'>
            <h1 className='font-normal text-4xl text-center font-montserrat mt-7'>News & Announcement</h1>
            <div className='flex flex-col md:flex-row gap-7 mt-8'>
                <NewsCard
                    imageSrc={i1}
                    altText='i1'
                    date='June 1, 2024'
                    title='New Legislation Boosts Rubber Recycling Industry'
                    description="A new piece of legislation passed in the European Union aims to significantly boost the rubber recycling industry. The law mandates stricter recycling targets for used tires, encouraging the use of recycled materials in new products. This move is expected to reduce landfill waste and promote a circular economy. "
                    buttonText='Read more'
                    buttonBgColor='#323232'
                />
                <NewsCard
                    imageSrc={i2}
                    altText='i1'
                    date='May 20, 2024'
                    title='Innovative Recycling Technology Unveiled'
                    description="Green Tech Innovations has unveiled a groundbreaking technology that enhances the efficiency of recycling rubber tires into crumb rubber. This new process reduces energy consumption by 20% and increases the purity of the final product. Industry experts believe this will revolutionize the market and make recycled rubber more competitive."
                    buttonText='Read more'
                    buttonBgColor='#323232'
                />
                <NewsCard
                    imageSrc={i3}
                    altText='i1'
                    date='April 15, 2024'
                    title='Major Tire Manufacturer Commits to 100% Recycled Rubber by 2030'
                    description="India's growing vehicle population creates a mounting problem: discarded tyres. These end-of-life tyres pose a significant environmental threat if not managed responsiblyOne of the world's leading tire manufacturers, EcoTires Inc., has committed to using 100% recycled rubber in its tire production by 2030. This bold move is part of their sustainability initiative and aims to significantly reduce their carbon footprint and reliance on natural rubber resources."
                    buttonText='Read more'
                    buttonBgColor='#323232'
                />
            </div>

        </div>
    );
};

export default NewsAndAnouncement;
