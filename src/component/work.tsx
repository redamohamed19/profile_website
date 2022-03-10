/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import reactpic from '../imgs/react.svg';
import typescriptpic from '../imgs/typescript.svg';
import netlifypic from '../imgs/netlify.svg';
import html from '../imgs/html.svg';
import js from '../imgs/js.svg';
import css from '../imgs/css.svg';
import tailwind from '../imgs/tailwind.svg';
import chartjs from '../imgs/chartjs.svg';
export default function Work() {
  return (
    <div
      className="  h-fit pl-36 pr-20 px-36 mb-24 lg:px-24 lg:pt-36 sm:p-16 ssm:px-8"
      id="work"
    >
      <h1 className="text-[60px]  leading-[88px]  text-silver py-6 sm:text-[40px]">
        My Work
      </h1>
      <div className="flex  justify-center gap-[4%] gap-y-12 flex-wrap mx-auto 2xl:w-full xl:w-full">
        <div className="profile profile1 border w-[20rem]   ">
          <div className="info flex hover:bg-black flex-col justify-between h-full py-12 px-8">
            <h1 className="text-white text-center text-[20px] ">
              Sneakers Web App
            </h1>
            <p className="text-white">
              Sneakers is an Web app which show a beautiful product page. We'll
              be putting our JS skills to the test with a lightbox product
              gallery and cart functionality!.
            </p>
            <div className="icon_soft">
              <img src={html} className="w-[50px] h-[50px]" alt="react" />
              <img src={css} className="w-[50px] h-[50px]" alt="react" />
              <img src={js} className="w-[50px] h-[50px]" alt="react" />
            </div>
            <a
              className="browsea"
              href="https://redamohamed19.github.io/sneakers_landing_page/dist/"
              target="_blank"
            >
              <button className="browse">browse</button>
            </a>
          </div>
        </div>{' '}
        <div className="profile profile2 border w-[20rem]   ">
          <div className="info flex hover:bg-black flex-col justify-between h-full py-12 px-8">
            <h1 className="text-white text-center text-[20px] ">
              DesignPal Mobile App
            </h1>
            <p className="text-white">
              DesignPal is an AR mobile app which assists users to scan their
              new apartment and suggest various interior decorations and styles
              suitable for that particular apartment.
            </p>
            <div className="icon_soft">
              <img src={reactpic} className="w-[50px] h-[50px]" alt="react" />
              <img
                src={typescriptpic}
                className="w-[50px] h-[50px]"
                alt="react"
              />
              <img src={netlifypic} className="w-[50px] h-[50px]" alt="react" />
            </div>
            <button className="browse">browse</button>
          </div>
        </div>{' '}
        <div className="profile profile3 border w-[20rem]   ">
          <div className="info flex hover:bg-black flex-col justify-between h-full py-20 px-8">
            <h1 className="text-white text-center text-[20px] ">
              Space tourism App
            </h1>
            <p className="text-white">
              Space tourism is an web app and ommercial spaceline, and my
              purpose is to connect people across the globe to the love, wonder
              and awe created by space travel..
            </p>
            <div className="icon_soft">
              <img src={reactpic} className="w-[50px] h-[50px]" alt="react" />
              <img src={js} className="w-[50px] h-[50px]" alt="react" />
              <img src={tailwind} className="w-[50px] h-[50px]" alt="react" />
            </div>
            <a
              className="browsea"
              href="https://spacetourism19.netlify.app/"
              target="_blank"
            >
              <button className="browse">browse</button>
            </a>
          </div>
        </div>
        <div className="profile profile4 border w-[20rem]   ">
          <div className="info flex hover:bg-black flex-col justify-between h-full py-12 px-8">
            <h1 className="text-white text-center text-[20px] ">
              Interactive comment section
            </h1>
            <p className="text-white">
              Interactive comment section is an Wev app which give the user the
              ability to Create, Read, Update, and Delete comments and replies
              Upvote and downvote comments ,See hover states for all interactive
              elements on the page
            </p>
            <div className="icon_soft">
              <img src={reactpic} className="w-[50px] h-[50px]" alt="react" />
              <img src={js} className="w-[50px] h-[50px]" alt="react" />
              <img src={netlifypic} className="w-[50px] h-[50px]" alt="react" />
            </div>
            <a
              className="browsea"
              href="https://redamohamed19.github.io/Interactive-comments-section/dist/"
              target="_blank"
            >
              <button className="browse">browse</button>
            </a>
          </div>
        </div>
        <div className="profile profile5 border w-[20rem]   ">
          <div className="info flex hover:bg-black flex-col justify-between h-full py-12 px-8">
            <h1 className="text-white text-center text-[20px] ">
              Namla Dashboard
            </h1>
            <p className="text-white">
              this is Dashboard app which control a cloud service ,availabme
              machine configuration and prices it show relevant chart about
              state of the users machine .
            </p>
            <div className="icon_soft">
              <img src={reactpic} className="w-[50px] h-[50px]" alt="react" />
              <img
                src={typescriptpic}
                className="w-[50px] h-[50px]"
                alt="react"
              />
              <img src={chartjs} className="w-[50px] h-[50px]" alt="react" />
            </div>
            <a
              className="browsea"
              href="https://namladashboard.netlify.app/#/"
              target="_blank"
            >
              <button className="browse">browse</button>
            </a>
          </div>
        </div>{' '}
        <div className="profile profile6 border w-[20rem]   ">
          <div className="info flex hover:bg-black flex-col justify-between h-full py-12 px-8">
            <h1 className="text-white text-center text-[20px] ">
              Web developer portfolio
            </h1>
            <p className="text-white">
              personel web site for a user to show his previous work and
              experties skills,to share his website social network account and
              personel adress for connection
            </p>
            <div className="icon_soft">
              <img src={reactpic} className="w-[50px] h-[50px]" alt="react" />
              <img src={js} className="w-[50px] h-[50px]" alt="react" />
              <img src={tailwind} className="w-[50px] h-[50px]" alt="react" />
            </div>
            <a
              className="browsea"
              href="https://redamohamed19.github.io/myportfolio/"
              target="_blank"
            >
              <button className="browse">browse</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
