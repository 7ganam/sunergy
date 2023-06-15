import Layout from "../../components/layout/Layout";
import Link from "next/link";
import React from "react";
import Slider2 from "../../components/slider/Slider2";
import TextEffect from "../../components/elements/TextEffect";

const Index2 = () => {
  return (
    <>
      <Layout>
        <section className="pt-1 pb-20 " id="key-features">
          <div className="container">
            <div className="text-center mb-20 mt-16">
              <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                <span>Our </span>
                <span className="text-cyan-400">Services </span>
              </h2>
            </div>
            <div className="w-full">
              <div className="  -mb-6 text-center flex flex-wrap gap-5 justify-center">
                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full flex flex-col">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/4.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Project Development
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Our team's wealth of experience in project development and
                      finance enables successful solutions that drive business
                      success.
                    </p>
                    <div className="flex-grow"></div>
                    <Link
                      href="/services/project-development"
                      legacyBehavior
                      className="mt-4"
                    >
                      <a
                        className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full flex flex-col">
                    {" "}
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/5.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">ESG</h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Helping our clients to communicate their sustainability
                      strategies and performance in a clear and compelling way.
                    </p>
                    <div className="flex-grow"></div>
                    <Link href="/services/ESG" legacyBehavior className="mt-4">
                      <a
                        className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full flex flex-col">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/1.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Market Research and Strategy Development
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Make informed decisions and achieve your growth objectives
                      with our comprehensive market research and strategic
                      planning services.
                    </p>
                    <div className="flex-grow"></div>
                    <Link
                      href="/services/market-research"
                      legacyBehavior
                      className="mt-4"
                    >
                      <a
                        className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px]  px-3 mb-6 wow animate__animated animate__fadeIn "
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full flex flex-col">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/2.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Technology Assessment{" "}
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Validate tech readiness, market potential and MENA
                      application for investors, acquirers, and universities.
                    </p>
                    <div className="flex-grow"></div>

                    <Link
                      href="/services/technology-assessment"
                      legacyBehavior
                      className="mt-4"
                    >
                      <a
                        className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full flex flex-col">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/3.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Startup Advisory
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Transform your startup idea into a thriving business with
                      our comprehensive advisory services.
                    </p>
                    <div className="flex-grow"></div>

                    <Link
                      href="/services/startup-advisory"
                      legacyBehavior
                      className="mt-4"
                    >
                      <a
                        className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full flex flex-col">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/6.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Event and Content Management
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      MENA business success starts with great content
                      management. Let our experts help you to have the most
                      suitable content and speakers.{" "}
                    </p>
                    <div className="flex-grow"></div>

                    <Link
                      href="/services/event-and-content-management"
                      legacyBehavior
                      className="mt-4"
                    >
                      <a
                        className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-1 pb-20 " id="key-features">
          <div className="container">
            <div className="text-center mb-20 mt-16">
              <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                <span>AREAS OF </span>
                <span className="text-cyan-400">EXPERTISE </span>
              </h2>
            </div>
          </div>
          <div className="w-full min-h-[300px] bg-cyan-400 flex items-center  justify-center">
            <div className="container grid-cols-2 justify-center flex-wrap  grid  md:grid-cols-3 ">
              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 md:min-w-[96px]">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/services/1.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading count text-white ">
                    Electric Vehicles
                  </div>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 md:min-w-[96px]">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/services/2.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading count text-white">
                    Storage Solutions
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 md:min-w-[96px]">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/services/3.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading count text-white">
                    Energy Efficiency
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 md:min-w-[96px]">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/services/4.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading count text-white">
                    Solar Energy (PV& CSP)
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 md:min-w-[96px]">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/services/5.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading count text-white">
                    Climate Finance
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12  sm:h-24 sm:w-24 md:min-w-[96px]">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/services/6.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading count text-white">
                    Off Grid and Hybrid Power Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20"></section>
      </Layout>
    </>
  );
};

export default Index2;
