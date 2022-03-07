/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

export default function Main() {
  return (
    <div className="px-36 h-[87vh] py-36">
      <p className="text-bermuda text-base py-2 font-bitter">Hi, my name is</p>
      <h1 className="text-silver text-7.5xl leading-[88px] py-2 ">
        Sayah Reda
      </h1>
      <h1 className="text-wbermuda text-7.5xl leading-[72px] py-2">
        I build things for the web.
      </h1>
      <h3 className="text-wbermuda text-sm leading-[26px] w-1/3 py-6">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </h3>
      <button className="text-bermuda border rounded px-4 py-2">
        Check out ???
      </button>
    </div>
  );
}
