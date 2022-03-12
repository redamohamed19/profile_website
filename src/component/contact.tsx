/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import gps from '../imgs/gps.svg';
import phone from '../imgs/phone.svg';

export default function Contact() {
  return (
    <div
      className=" pl-36 pr-20 px-36 mb-36  lg:px-24 lg:pt-36 sm:p-16 ssm:px-8"
      id="contact"
    >
      <h1 className="text-[60px]  leading-[88px]  text-silver py-6 sm:text-[40px]">
        Contact Me
      </h1>
      <div className="flex md:gap-[3rem] md:flex-col  sm:flex-col  ssm:flex-col">
        <div className="w-[45%] md:w-[100%] sm:w-[100%]  ssm:w-[100%] md:mb-16">
          {' '}
          <p className="text-wbermuda text-justify text-[20px]">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
          <form className="relative">
            <div className="my-5 flex gap-[8%]  ssm:flex-col">
              <input
                className="contactinput ssm:mb-6 bg-transparent w-[46%] text-white px-5 py-3 rounded text-[20px] ssm:w-[100%]"
                placeholder="Name"
                type="text"
              />
              <input
                className="contactinput bg-transparent w-[46%] text-white px-5 py-3 rounded text-[20px] ssm:w-[100%]"
                placeholder="Email"
                type="email"
              />
            </div>
            <input
              className="contactinput bg-transparent text-white my-5 px-5 py-3 rounded text-[20px] w-full"
              placeholder="Subject"
              type="text"
            />
            <br />
            <input
              className="contactinput bg-transparent text-white my-5  px-5 py-3 rounded text-[20px] w-full h-36"
              placeholder="Message"
              type="text"
            />
            <br />
            <input
              className="contactinput text-bermuda rounded my-5  px-20 py-2 absolute right-0 hover:bg-bermuda hover:text-[#000] hover:border-none"
              type="submit"
              value="send"
            />
          </form>
        </div>
        <div className="w-[45%] self-start xl:w-1/2 lg:w-1/2 md:w-[100%]">
          <div className="flex  ml-[45%] gap-10 my-10 3xl:ml-[30%] lg:ml-[10%]">
            <img
              src={gps}
              className="w-[70px] ssm:w-[50px]"
              alt="localisation"
            />
            <p className="text-[#8892B0] text-[30px] md:text-[25px] ssm:text-[20px] ">
              Oran,Algerie
            </p>
          </div>
          <div className="flex ml-[45%] gap-10 my-10 3xl:ml-[30%] lg:ml-[10%] lg:w-full">
            <img
              src={phone}
              className="w-[70px]  ssm:w-[50px]"
              alt="phone number"
            />
            <p className="text-[#8892B0] text-[30px] md:text-[25px] ssm:text-[20px]">
              +213 780-059-126
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
