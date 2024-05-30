// Article.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Article = ({ article }: any) => {
    return (
        <div className="flex flex-col md:flex-row m-4">
            <Image
                src={article.image1}
                alt={article.title}
                className="w-full"
                width={200}
                height={100}
            />
            <div className="flex flex-col justify-center p-8 font-bold border-solid border-b-[3px] border-zinc-800 text-zinc-800">
                <div className="text-sm uppercase">{article.category}</div>
                <div className="mt-5 text-lg uppercase text-zinc-800">
                    {article.title}
                </div>
                <div className="mt-8 text-sm font-light text-neutral-400">
                    {article.desc}
                </div>
                <Link href={`/post/${article.slug}`} className='h-full rounded-xl overflow-hidden'>
                    <div className="flex mt-6 text-base">- Read more</div>
                </Link>
            </div>
        </div>
    );
};

export default Article;
