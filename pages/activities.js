import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";
import DocumentView from "../components/elements/DocumentView";

const publications = [
  {
    name: "Cleantech in the Middle East Cleantech in the Middle East",
    url: "./pdfs/cleantech-whitepaper-ei-mena-en-109140.pdf",
    image: "/pdfs/1.png",
  },
  {
    name: "COP28_Featured News by Sunergy",
    url: "./pdfs/COP28_Featured News by Sunergy.pdf",
    image: "/pdfs/3.png",
  },  
];

const events = [
  {
    name: "Sunergy at WETEX 2023_Post Show Report",
    url: "./pdfs/Sunergy at WETEX 2023_Post Show Report.pdf",
    image: "/pdfs/2.png",
  },  
];

const About = () => {
  return (
    <>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div className="relative isolate overflow-hidden pt-14">
            <img
              src="/assets/imgs/about/header.jpg"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            {/* <div class="absolute inset-0 bg-gradient-to-b from-cyan-300 to-transparent"></div> */}
            <div class="z-20 absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-30">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center z-30">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl -z-30">
                  Activites
                </h1>
                <p className="mt-6 text-xl leading-8 text-white z-30">
                  Sunergy activites are focused on the clean energy and
                  sustainability sector
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-400 h-4"></div>
          {/* <div class=" inset-0 bg-gradient-to-b from-cyan-300 to-slate-200 h-4"></div> */}
        </section>

        <section className=" " id="key-features">
          <div className="w-full min-h-[10px] bg-cyan-400 flex items-center  justify-center"></div>
        </section>

        <section id={"publications"} className="bg-slate-100 pb-5">
          <div className="text-center mb-8 mt-0 pt-16">
            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
              <span>Our </span>
              <span className="text-cyan-400">Publications </span>
            </h2>
            <p
              className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              Articles and publications by Sunergy
            </p>
          </div>
          <div className={"flex justify-center gap-5"}>
            <DocumentView publication={publications[0]}/>
            <DocumentView publication={publications[1]}/>

          </div>
        </section>

        <section id={"events"} className=" pb-20">
          <div className="text-center mb-8 mt-0 pt-16">
            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
              <span>Our </span>
              <span className="text-cyan-400">Events </span>
            </h2>
            <p
              className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
             Events organized by Sunergy
            </p>
          </div>
          <div className={"flex justify-center gap-5"}>
            <DocumentView publication={events[0]}/>
          </div>
        </section>


      </Layout>
    </>
  );
};

export default About;
