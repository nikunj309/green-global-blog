import CommonHeroSectionCard from '@/components/CommonHeroSectionCard';
import Image from 'next/image';
import React from 'react'


import stare from "@/assets/aboutpageImages/stare.png";
import imagesrc from "@/assets/aboutpageImages/Hero_sec.png";
import icon_left from "@/assets/aboutpageImages/icon_left.png";

import casestudy_1 from "@/assets/aboutpageImages/casestudy (1).png"
import casestudy_2 from "@/assets/aboutpageImages/casestudy (2).png"
import casestudy_3 from "@/assets/aboutpageImages/casestudy (3).png"
import CaseStudyCard from '@/components/aboutPageCmp/CaseStudy';

const page = () => {

  const caseStudies = [
    {
      imageSrc: casestudy_1,
      title: 'Project Name 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus diam nec aliquam fermentum. Nullam at lorem vel erat tempor mollis.',
    },
    {
      imageSrc: casestudy_2,
      title: 'Project Name 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus diam nec aliquam fermentum. Nullam at lorem vel erat tempor mollis.',
    },
    {
      imageSrc: casestudy_3,
      title: 'Project Name 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus diam nec aliquam fermentum. Nullam at lorem vel erat tempor mollis.',
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
          <div className="flex-1 m-10 p-10 bg-[#DDDDDD] shadow-lg">
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
          <div className="flex-1 p-4">
            <div className="mb-2">
              <span className="text-white px-4 py-1 bg-orange-400 m-2">
                About us{" "}
              </span>
              The squibbly-wibbly flibber-flabber mumble-jumble blorky-dorky
              zibber-zabber of flibbertigibbet gloopity-glop on wobbly-wob.
              Wubbly-wab and zibbly-zab, the higgledy-piggledy dingle-dangle of
              squiggly-squaggly bloopity-blop. Glabber-glab and blibber-blab,
              the snibbly-snabber of dingle-dangle floopity-flop. Dribbly-drab
              and snibbly-snab, the wibbly-wabbly of dabbly-dab.
            </div>
            <div className="text-lg mb-2">Nurture Relationships</div>
            <div className="text-lg">Building Relationships</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          <div className="w-full bg-[#9F9F9F] px-20  py-16"></div>
          <div className="w-full bg-[#9F9F9F] px-20 py-16"></div>
          <div className="w-full bg-[#9F9F9F] px-20 py-16"></div>
          <div className="w-full bg-[#9F9F9F] px-20 py-16"></div>
        </div>
        <div className="flex-1 p-8">
          <p className="text-[#A4A4A4] text-lg mb-2">
            MAJOR AND BEST
          </p>
          <h1 className="text-black font-bold text-4xl mb-4">
            OUR CLIENTS
          </h1>
          <p className="text-[#A4A4A4] mb-4 mt-10">
            Cras feugiat nibh vel imperdiet porta. Nam ut libero scelerisque,
            porta ligula in, mattis neque. Duis consequat, eros eu mollis
            venenatis, lectus nisi sagittis lorem, a lacinia arcu lectus vitae
            ante. Sed tempus aliquam erat, ac euismod erat commodo vel. Etiam
            semper massa at lectus congue tristiq. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <p className="text-black border-l-4 p-2 border-[#FCCA03] font-semibold mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            nibh non lectus finibus tempor. Aliquam erat volutpat. Morbi
            egestas mi vitae dui pretium placerat. Aenean tristique sapien.
          </p>
        </div>
      </div>
    </main >
    </>
  )
}

export default page
