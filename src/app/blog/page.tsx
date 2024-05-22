"use client"
import React, { useState } from "react";
import Image from "next/image";
import imagesrc from "@/assets/ContactPageImages/90_1.png";
import TireDerivedFuel from "@/assets/ProductScreenImages/tire-derived-fuel.png";

import blog1 from "@/assets/blogpageImages/blog (1).png";
import blog2 from "@/assets/blogpageImages/blog (2).png";
import blog3 from "@/assets/blogpageImages/blog (3).png";
import blogFigure1 from "@/assets/blogpageImages/blogFigure (1).png";
import blogFigure2 from "@/assets/blogpageImages/blogFigure (2).png";
import blogFigure3 from "@/assets/blogpageImages/blogFigure (3).png";
import blogFigure4 from "@/assets/blogpageImages/blogFigure (4).png";
import profile from "@/assets/blogpageImages/profile.png";
import Artical from "@/assets/blogpageImages/Article.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonHeroSectionCard from "@/components/CommonHeroSectionCard";

const page = () => {
    const title = "Blog";
    const description =
        "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices";

    const articles = [
        {
            category: "Environment",
            title: "Flank jerky cow sirloin strip steak t-bone bacon",
            description:
                "Spare ribs kevin pork loin magna, adipisicing culpa consectetur meatball dolore doner ham tri-tip sunt kielbasa est. Culpa incididunt tri-tip, porchetta officia occaecat cupidatat swine…",
            imageSrc: TireDerivedFuel,
        },
        {
            category: "Working Process",
            title: "Pancetta tenderloin bresaola sausage",
            description:
                "Rump cow picanha, short loin venison pork belly sirloin drumstick. Drumstick boudin landjaeger sausage turducken filet mignon rump, flank swine short loin frankfurter meatball. Short…",
            imageSrc: blogFigure4,
        },
        {
            category: "Wind Turbines",
            title: "Brisket leberkas alcatra ground round, bresaola sausage",
            description:
                "Doner tail strip steak venison beef ribs meatloaf leberkas ground round swine filet mignon alcatra short loin pork chop. Short loin t-bone tongue bresaola salami…",
            imageSrc: blogFigure3,
        },
    ];
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };


    return (
        <>
            <CommonHeroSectionCard
                title={title}
                imageSrc={imagesrc}
                description={description}
            />
            <main className="flex flex-col md:flex-row justify-center md:p-8 max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col items-center justify-center mt-16 ">
                    <div className="flex flex-col gap-5 ">
                        <Image
                            src={blogFigure1}
                            alt="Brisket pork chop short loin meatball ham kevi"
                            className="w-full"
                        />
                        <div className="flex flex-col justify-center p-8 font-bold  border-solid border-b-[3px] border-zinc-800 text-zinc-800">
                            <div className="text-sm  uppercase">Heat Pumps</div>
                            <div className="mt-5 text-lg uppercase text-zinc-800">
                                Brisket pork chop short loin meatball ham kevi
                            </div>
                            <div className="mt-8 text-sm font-light text-neutral-400">
                                Porchetta flank bacon tenderloin chuck boudin shankle turducken.
                                Corned beef cow pork kevin jowl andouillstrip steak, ground
                                round short ribs brisket swine cupim. Tail…
                            </div>
                            <div className="flex gap-1.5 mt-6 text-base ">- Read more</div>
                        </div>
                    </div>

                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className={`justify-center mt-16 ${index > 0 && "max-md:mt-10"
                                } max-md:max-w-full`}
                        >
                            <div className="flex flex-col md:flex-row">
                                <Image
                                    src={article.imageSrc}
                                    alt={article.title}
                                    className="w-full"
                                />
                                <div className="flex flex-col justify-center p-8 font-bold  border-solid border-b-[3px] border-zinc-800 text-zinc-800">
                                    <div className="text-sm uppercase">{article.category}</div>
                                    <div className="mt-5 text-lg uppercase text-zinc-800">
                                        {article.title}
                                    </div>
                                    <div className="mt-8 text-sm font-light text-neutral-400">
                                        {article.description}
                                    </div>
                                    <div className="flex mt-6 text-base ">- Read more</div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col items-center px-16 py-9 mt-16 w-full bg-zinc-600 ">
                        <Image src={profile} alt="Inner image" className="rounded-50" />
                        <div className="mt-5 text-sm font-bold text-center text-white uppercase">
                            Status
                        </div>
                        <div className="mt-3 text-xs  text-center text-white uppercase">
                            December 24, 2023
                        </div>
                        <div className="mt-4 text-lg font-bold text-center text-white uppercase">
                            Picanha ball tip spare ribs kielbasa chuck t-bone ground round
                        </div>
                    </div>

                    <div className="flex flex-col mt-16 md:flex-row ">
                        <Image src={blogFigure2} alt="Chat" className="w-full" />
                        <div className="flex flex-col  justify-center p-8 font-bold  border-solid border-b-[3px] border-zinc-800 text-zinc-800 ">
                            <div className="text-sm  uppercase">Solar System</div>
                            <div className="mt-5 text-lg uppercase text-zinc-800">Chat</div>
                            <div className="mt-8 text-sm font-light text-neutral-400">
                                Abbott: Strange as it may seem, they give ball players nowadays
                                very peculiar names. Costello: Funny names? Abbott: Nicknames,
                                nicknames. Now, on the St. Louis team we have Who’s on first,
                                What’s on second, I Don’t Know is on third–
                            </div>
                            <div className="flex mt-6 text-base">- Read more</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center px-14 py-8 mt-10 bg-zinc-500 ">
                        <div className="text-lg  uppercase text-white">Aside</div>
                        <div className="mt-2 text-sm uppercase text-white">APRIL 24, 2024</div>
                        <div className=" mt-5 text-sm font-light  text-stone-200 ">
                            “I never tried to prove nothing, just wanted to give a good show.
                            My life has always been my music, it’s always come first, but the
                            music ain’t worth nothing if you can’t lay it on the public. The
                            main thing is to live for that audience, ’cause what you’re there
                            for is to please the people.”
                        </div>
                    </div>
                    <div className="flex px-11 py-5 mt-8 text-sm  text-center  shadow-2xl gap-5 bg-white ">
                        <div className="text-zinc-800">1</div>
                        <div className="text-neutral-400">2</div>
                        <div className="text-neutral-400">&gt;</div>
                    </div>
                </div>

                <div className="flex flex-col  px-5 mt-16">
                    <div className="flex flex-col p-8 border-2 border-solid border-zinc-800 ">
                        <label className="text-lg font-bold uppercase text-zinc-800">
                            Search
                        </label>
                        <input
                            type="search"
                            placeholder="Search..."
                            className="border-b-2 mt-8 border-solid italic border-neutral-200 text-neutral-400"
                        ></input>
                    </div>

                    <div className="mt-14">
                        <h2 className=" text-lg font-bold  uppercase text-zinc-800">
                            Categories
                        </h2>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className=" uppercase text-neutral-400 flex flex-col gap-5">
                            <p>Environment</p>
                            <p>Heat Pumps</p>
                            <p>Solar System</p>
                            <p>Wind Turbines</p>
                            <p>Working Process</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-10">
                        <h2 className=" text-lg font-bold text-zinc-800 uppercase">
                            Recent Post
                        </h2>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className="flex flex-col gap-8 mt-9 text-sm">
                            <div className="flex items-center gap-5">
                                <Image src={blog1} alt="Recent post 1" />
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-sm font-bold  text-zinc-800 uppercase">
                                        Tri-tip doner
                                    </h4>
                                    <p className="text-xs  text-neutral-400">December 24, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <Image src={blog3} alt="Recent post 2" />

                                <div className="flex flex-col gap-4">
                                    <h4 className="text-sm font-bold text-zinc-800 uppercase">
                                        Meatball flank
                                    </h4>
                                    <p className="text-xs  text-neutral-400">December 24, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <Image src={blog2} alt="Recent post 3" />
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-sm font-bold text-zinc-800 uppercase">
                                        Short ribs swine
                                    </h4>
                                    <p className="text-xs  text-neutral-400">December 24, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-14">
                        <div className="text-lg font-bold uppercase text-zinc-800 ">
                            Tags Widget
                        </div>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className="flex flex-wrap gap-5 mt-8 text-sm uppercase text-[#8C8C8C] font-semibold">
                            <p>Environment</p>
                            <p>Heat Pumps</p>
                            <p>Solar System</p>
                            <p>Wind Turbines</p>
                            <p>Working Process</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default page;