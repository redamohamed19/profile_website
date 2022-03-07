/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import logo from '../imgs/Logo.svg';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Project', href: '#' },
  { name: 'Contact', href: '#' }
];

export default function Example() {
  return (
    <div className="relative flex justify-between   py-10 px-20 ">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between w-1/2 pr-8">
        <ul className="flex gap-16  ">
          {navigation.map((element, index) => {
            return (
              <li key={element.name}>
                <span className="text-base text-white hover:text-bermuda">
                  {' '}
                  <span className="text-bermuda pr-1">{index + 1}.</span>
                  {element.name}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="p-resume  text-bermuda border px-2 py-1 rounded">
          Resume
        </p>
      </div>
    </div>
  );
}
