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
                    date='April 14, 2024'
                    title='Recycling Solutions - From Discarded Tyres to Valuable Resources'
                    description="India's growing vehicle population creates a mounting problem: discarded tyres. These end-of-life tyres pose a significant environmental threat if not managed responsibly."
                    buttonText='Read more'
                    buttonBgColor='#323232'
                />
                <NewsCard
                    imageSrc={i2}
                    altText='i1'
                    date='April 14, 2024'
                    title='Recycling Solutions - From Discarded Tyres to Valuable Resources'
                    description="India's growing vehicle population creates a mounting problem: discarded tyres. These end-of-life tyres pose a significant environmental threat if not managed responsibly."
                    buttonText='Read more'
                    buttonBgColor='#323232'
                />
                <NewsCard
                    imageSrc={i3}
                    altText='i1'
                    date='April 14, 2024'
                    title='Recycling Solutions - From Discarded Tyres to Valuable Resources'
                    description="India's growing vehicle population creates a mounting problem: discarded tyres. These end-of-life tyres pose a significant environmental threat if not managed responsibly."
                    buttonText='Read more'
                    buttonBgColor='#323232'
                />
            </div>

        </div>
    );
};

export default NewsAndAnouncement;
