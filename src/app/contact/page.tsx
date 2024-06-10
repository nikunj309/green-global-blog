"use client"
import React, { useState } from "react";
import Image from "next/image";

import emailIcon from "@/assets/ContactPageImages/email.png";
import location from "@/assets/ContactPageImages/location.png";
import phone from "@/assets/ContactPageImages/phone.png";
import imagesrc from "@/assets/ContactPageImages/90_1.png";
import CommonHeroSectionCard from "@/components/CommonHeroSectionCard";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const Page = () => {
  const title = "Contact";
  const description =
    "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Message sent successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('Failed to send message. Please try again.');
    }
  };



  return (
    <>
      <CommonHeroSectionCard
        title={title}
        imageSrc={imagesrc}
        description={description}
      />
      <main className="flex justify-center items-center flex-col p-4 md:p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <div className="flex-1 relative flex flex-col items-center py-8 px-4 m-4 max-w-md bg-white shadow-lg">
              <h3 className="text-center">CONNECT WITH US</h3>
              <p className="text-center text-2xl font-semibold mt-4">
                OUR CONTACTS
              </p>
              <div className="absolute top-0 left-0 m-3 h-1 w-8 bg-black"></div>
              <div className="absolute top-0 left-0 h-8 m-3 w-1 bg-black"></div>
              <div className="absolute bottom-0 right-0 h-1 m-3 w-8 bg-black"></div>
              <div className="absolute bottom-0 right-0 h-8 w-1 m-3 bg-black"></div>
            </div>
          </div>
          <p className="text-lg">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Fusce tempus odio vitae nibh semper, ac
            venenatis massa mollis. Proin tempus, mauris eu facilisis feugiat,
            nisi augue faucibus.
          </p>
        </div>

        <div className="w-full mx-auto mb-8 bg-white shadow-lg px-4 py-6 md:px-32 md:py-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-start gap-4">
              {/* <Image src={location} width={30} height={30} alt="Location icon" /> */}
              <MdOutlineLocationOn   size={40} className='sm:size-30' />
              <div>
                <div className="text-lg font-semibold">HEAD OFFICE</div>
                <div className="text-base">
                  Green Global Technologies, Moje Pratapnagar, Ta: Savli, Dis:
                  Vadodara, Gujarat - 391520
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              {/* <Image src={phone} width={30} height={30} alt="Phone icon" /> */}
              <FiPhone size={40} className='sm:size-30' />
              <div>
                <div className="text-lg font-semibold">CALL US</div>
                <div className="text-base">Support: +91 98799 48500</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              {/* <Image src={emailIcon} width={30} height={30} alt="Email icon" /> */}
              <HiOutlineMail  size={40} className='sm:size-30' />
              <div>
                <div className="text-lg font-semibold">EMAIL US</div>
                <div className="text-base">info@greenglobaltechnologies.in</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          {/* <form className="bg-zinc-50 border border-zinc-400 border-r-8 border-t-2 shadow-lg px-4 pt-6 pb-8 mb-4 md:px-8">
            <h1 className="text-4xl font-semibold mb-4 p-2 text-center">
              CONTACT FORM
            </h1>
            <div className="mb-4">
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="subject"
                type="text"
                placeholder="Enter Your Subject"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="message"
                placeholder="Enter Your Message..."
                rows={4}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-5 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form> */}
          <form onSubmit={(e: any) => handleSubmit(e)} className="bg-zinc-50 border border-zinc-400 border-r-8 border-t-2 shadow-lg px-4 pt-6 pb-8 mb-4 md:px-8">
            <h1 className="text-4xl font-semibold mb-4 p-2 text-center">CONTACT FORM</h1>
            <div className="mb-4">
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="name"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="subject"
                type="text"
                placeholder="Enter Your Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight md:py-4"
                id="message"
                placeholder="Enter Your Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-5 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;