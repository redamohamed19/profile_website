/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import logo from '../imgs/Logo.svg';

import { Link } from 'react-router-dom';

const navigation = [
  { name: 'About', href: '#main' },
  { name: 'Experience', href: '#exper' },
  { name: 'Project', href: '#work' },
  { name: 'Contact', href: '#contact' }
];

export default function Example() {
  const [nav, SetNav] = useState(false);
  return (
    <div className="relative flex justify-between   py-10 px-36 lg:px-10 md:px-12 ">
      <div className="">
        <img src={logo} alt="logo" className="w-[50px]" />
      </div>
      <div className="flex justify-between gap-4 w-2/4 pr-8 lg:w-3-5  xl:self-center md:hidden lg:w-2/3">
        <ul className="flex gap-16 xl:gap-8 lg:gap-6 ">
          {navigation.map((element, index) => {
            return (
              <li key={element.name}>
                <a href={element.href}>
                  <span className="text-[20px] text-white hover:text-bermuda">
                    {' '}
                    <span className="text-bermuda pr-1">{index + 1}.</span>
                    {element.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="p-resume  text-bermuda border px-2 py-1 rounded">
          Resume
        </p>
      </div>
      <div className="hidden md:block">
        <div
          className="absolute h-[3px] w-5 self-end bg-bermuda z-10 "
          onClick={() => {
            SetNav(!nav);
          }}
        ></div>

        <div
          className={`absolute h-[100vh] bg-[#112240] w-2/3 top-0 right-0 py-48 ${
            nav ? 'open' : 'close'
          } 
          }`}
        >
          <ul className="flex flex-col gap-16 xl:gap-8 lg:gap-6 px-24 ">
            {navigation.map((element, index) => {
              return (
                <li key={element.name} className="py-4">
                  <span className="text-[20px] text-white hover:text-bermuda ">
                    {' '}
                    <span className="text-bermuda pr-1">{index + 1}.</span>
                    {element.name}
                  </span>
                </li>
              );
            })}
            <li className="w-fit  text-bermuda border px-4 py-1 rounded ">
              {' '}
              Resume
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
