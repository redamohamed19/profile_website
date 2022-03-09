/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import logo from '../imgs/Logo.svg';
import linkedin from '../imgs/linkedin.svg';
import twitter from '../imgs/twitter.svg';
import github from '../imgs/github.svg';

export default function Footer() {
  return (
    <div className="flex bg-[#212121] py-10 justify-between px-20 items-center md:flex-col gap-y-8">
      <div>
        <img src={logo} className="sm:w-[50px]" />
      </div>
      <div>
        <p className="text-[#ccc] ">© Copyright 2021. All right reserved</p>
      </div>
      <div className="flex gap-12">
        <img src={linkedin} className="sm:w-[40px]" />
        <img src={github} className="sm:w-[40px]" />
        <img src={twitter} className="sm:w-[40px]" />{' '}
      </div>
    </div>
  );
}
