
import React from 'react';
import Image from 'next/image';

const BlogPostComponent = ({ post }: any) => {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <Image src={post.imageSrc} alt={post.title} className="w-full" />
            <div className="flex flex-col justify-center p-8 font-bold border-solid border-b-[3px] border-zinc-800 text-zinc-800">
                <div className="text-sm uppercase">{post.category}</div>
                <div className="mt-5 text-lg uppercase text-zinc-800">
                    {post.title}
                </div>
                <div className="mt-8 text-sm font-light text-neutral-400">
                    {post.description}
                </div>
                <div className="flex mt-6 text-base">- Read more</div>
            </div>
        </div>
    );
};

export default BlogPostComponent;
