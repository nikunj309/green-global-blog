// Article.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Article = ({ article }: any) => {
    // Split the description into words and join the first 5 words
    const shortDesc = article.desc.split(' ').slice(0, 5).join(' ') + (article.desc.split(' ').length > 5 ? '...' : '');

    return (
        <div className="flex flex-col md:flex-row m-4 border border-gray-200 rounded-lg overflow-hidden shadow-lg w-[300px] md:w-[600px] h-auto md:h-[300px]">
            <div className="md:w-1/2 w-full h-full md:h-full">
                <Image
                    src={article.image1}
                    alt={article.title}
                    className="object-cover w-full h-full"
                    width={300}
                    height={400}
                    // layout="responsive"
                />
            </div>
            <div className="flex flex-col justify-center p-8 bg-white w-full md:w-1/2 h-full">
                <div className="text-sm uppercase text-gray-600">{article.category}</div>
                <div className="mt-2 text-lg uppercase text-black font-semibold line-clamp-2">
                    {article.title}
                </div>
                <div className="mt-4 text-sm font-light text-gray-500 line-clamp-3">
                    {shortDesc}
                </div>
                <Link href={`/post/${article.slug}`} className="mt-6 text-base text-blue-500 hover:text-blue-700">
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default Article;
