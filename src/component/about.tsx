/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

export default function Main() {
  return (
    <div
      className="h-[100vh] pl-36 pr-20 px-36 flex items-start lg:h-fit lg:flex-col lg:px-24 lg:pt-36 sm:p-16 ssm:px-8"
      id="exper"
    >
      <div className="w-2/3 text-wbermuda text-[20px] leading-[36px] lg:w-full ">
        <h1 className="text-[60px]  leading-[88px]  text-silver py-6 sm:text-[40px]">
          About Me
        </h1>
        <p className="ssm:text-[16px]">
          I’m Sayah Reda, a professional and talented web Developer with Full
          Stack development skills. I am passionate about leveraging my diverse
          backgrounds to decipher challenging problems and create delightful
          experiences. I honed my skills at web development,, product design and
          SEO analytics.
        </p>
        <p className="ssm:text-[16px]">
          {' '}
          For over a decade I had many opportunities to work in a vast spectrum
          of web technologies{' '}
        </p>
        <p className="ssm:text-[16px]">
          Now I design and develop beautiful websites which focus on providing
          the best experience for everyone using them, ensuring they are easy
          for your team to edit while also delivering the best experience for
          your users.
        </p>
      </div>
      <div className="w-[70%] z-10 xl:w-[60%] xl:w-[50%] self-start lg:w-2/3 lg:self-center">
        <div id="myCanvasContainer">
          <canvas
            className="ssm:w-[350px] ssm:height-[350px] xl:w-[450px] xl:height-[450px]"
            width="500"
            height="500"
            id="myCanvas"
          >
            <ul id="tags">
              <li>
                <a target="_blank">HTML</a>
              </li>
              <li>
                <a target="_blank">CSS</a>
              </li>
              <li>
                <a target="_blank">ES6</a>
              </li>
              <li>
                <a target="_blank">TypeScript</a>
              </li>
              <li>
                <a target="_blank">MongoDB</a>
              </li>
              <li>
                <a target="_blank">REST</a>
              </li>
              <li>
                <a target="_blank">JSON</a>
              </li>
              <li>
                <a target="_blank">Data Science</a>
              </li>
              <li>
                <a target="_blank">JEST</a>
              </li>

              <li>
                <a target="_blank">Python</a>
              </li>

              <li>
                <a target="_blank">Git</a>
              </li>
              <li>
                <a target="_blank">_lodash</a>
              </li>
              <li>
                <a target="_blank">SASS</a>
              </li>
              <li>
                <a target="_blank">JQuery</a>
              </li>
              <li>
                <a target="_blank">SQL</a>
              </li>
              <li>
                <a target="_blank">tailwindui</a>
              </li>
              <li>
                <a target="_blank">npm</a>
              </li>
              <li>
                <a target="_blank">Redux</a>
              </li>
            </ul>
          </canvas>
        </div>
      </div>
    </div>
  );
}
