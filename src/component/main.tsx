/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import TypedReactHooksDemo from './type';

export default function Main() {
  return (
    <div
      className="px-36 h-[87vh] pt-36 md:pt-[3rem] lg:px-24 lg:h-fit md:pt-16 sm:px-16 ssm:px-8"
      id="main"
    >
      <p className="text-bermuda text-base py-2 font-bitter sm:py-0">
        Hi, my name is
      </p>
      <h1 className="text-silver text-7.5xl leading-[88px] py-2 md:text-[60px] sm:text-[46px] sm:h-[80px] sm:py-0">
        Sayah Reda
      </h1>
      <h1 className="text-wbermuda text-[80px] leading-[72px] py-2 lg:text-[50px] md:text-[40px] sm:text-[36px]  sm:py-2 ssm:h-fit sm:leading-8">
        I <TypedReactHooksDemo />
      </h1>
      <h3 className="text-wbermuda text-[20px] leading-[26px] w-2/5 py-8 xl:w-2/3 sm:w-full sm:text-[16px] sm:pb-6 sm:py-4 ">
        I’m a software engineer specializing in building (and occasionall
        designing) exceptional digital experiences. Being a diligent,
        hardworking and result oriented men, I always work towards achieving
        best result on each project I lay my hands on..
      </h3>
      <a href="#contact">
        {' '}
        <button className="text-bermuda border rounded px-6 py-2 hover:bg-bermuda hover:text-[#000] hover:border-none">
          Contact me
        </button>
      </a>
    </div>
  );
}
