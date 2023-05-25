import React from "react";
import Layout from "../../components/layout/Layout";
import Slider2 from "../../components/slider/Slider2";
import TextEffect from "../../components/elements/TextEffect";
import Link from "next/link";

const Index2 = () => {
  return (
    <>
      <Layout>
        <section className="pt-16 pb-20" id="key-features">
          <div className="container">
            <div className="text-center mb-8 mt-20">
              <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                <span>Our </span>
                <span className="text-cyan-400">Services </span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                Our disciplined approach to resolving your legal issues will
                produce the best-possible outcome.
              </p>
            </div>
            <div className="w-full">
              <div className="  -mb-6 text-center grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div
                  className="hover-up-5 w-full h-full px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-12 bg-white shadow rounded h-full">
                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                      1
                    </div>
                    <img
                      className="h-36 mx-auto my-4 w-full object-cover rounded"
                      src="/assets/imgs/home/1.jpg"
                      alt="Monst"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Market Entry Strategy
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      PWe've established a strong track record of partnering
                      with clients to successfully penetrate the MENA region,
                      leveraging our expertise and experience
                    </p>
                    <Link
                      href="/services/market-entry"
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
                  className="hover-up-5 w-full  px-3 mb-6 wow animate__animated animate__fadeIn h-full"
                  data-wow-delay=".3s"
                >
                  <div className="p-12 bg-white shadow rounded h-full">
                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                      2
                    </div>
                    <img
                      className="h-36 mx-auto my-4 w-full object-cover rounded"
                      src="/assets/imgs/home/2.jpg"
                      alt="Monst"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Digital Marketing
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Unlock the potential of MENA through our digital marketing
                      expertise. Let us help your business thrive in the digital
                      realm.
                    </p>
                    <Link
                      href="/services/digital-marketing"
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
                  className="hover-up-5 w-full h-full px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-12 bg-white shadow rounded h-full">
                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                      3
                    </div>
                    <img
                      className="h-36 mx-auto my-4 w-full object-cover rounded"
                      src="/assets/imgs/home/3.jpg"
                      alt="Monst"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Content Management
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      MENA business success starts with great content
                      management. Let our experts help you to have the most
                      suitable content and speakers.
                    </p>
                    <Link
                      href="/services/content-management"
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
                  className="hover-up-5 w-full h-full px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-12 bg-white shadow rounded h-full">
                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                      4
                    </div>
                    <img
                      className="h-36 mx-auto my-4 w-full object-cover rounded"
                      src="/assets/imgs/home/4.jpg"
                      alt="Monst"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Project Development& Finance
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Our team's wealth of experience in project development and
                      finance enables successful solutions that drive business
                      success…
                    </p>
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
                  className="hover-up-5 w-full h-full px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-12 bg-white shadow rounded h-full">
                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                      5
                    </div>
                    <img
                      className="h-36 mx-auto my-4 w-full object-cover rounded"
                      src="/assets/imgs/home/5.jpg"
                      alt="Monst"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      ESG& Impact Reporting
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Helping our clients to communicate their sustainability
                      strategies and performance in a clear and compelling way.
                      …
                    </p>
                    <Link
                      href="/services/ESG-impact-reporting"
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
            {/* <div className="flex flex-wrap -mx-3 -mb-6 ">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="h-full border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-cyan-400 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Market Entry Strategy
                  </h3>
                  <p className="text-sm text-slate-400">
                    Our market entry advisory services are designed specifically
                    for the MENA region.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="h-full  border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-cyan-400 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Digital Marketing
                  </h3>
                  <p className="text-sm text-slate-400">
                    Sunergy Advisory provides dedicated digital marketing
                    campaigns
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="h-full border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-cyan-400 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Content Management
                  </h3>
                  <p className="text-sm text-slate-400">
                    Sunergy Advisory provides expert content management services
                    for events and conferences.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="h-full  border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-cyan-400 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Project Development & Finance
                  </h3>
                  <p className="text-sm text-slate-400">
                    Sunergy Advisory provides full cycle project development and
                    finance services to help you navigate these challenges
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="py-20 bg-slate-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                  <span>AREAS OF</span>
                  <span className="text-cyan-500"> EXPERTISE</span>
                  <span> :</span>
                  <br />
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <div
                  className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                    <img
                      className="  w-16 "
                      src="/assets/imgs/services/1.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Electric Vehicles
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                    <img
                      className="  w-16 "
                      src="/assets/imgs/services/2.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Storage Solutions
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                    <img
                      className="  w-16 "
                      src="/assets/imgs/services/3.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Energy Efficiency
                    </span>
                  </div>
                </div>

                <div
                  className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                    <img
                      className="  w-16 "
                      src="/assets/imgs/services/4.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Solar Energy (PV& CSP)
                    </span>
                  </div>
                </div>

                <div
                  className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                    <img
                      className="  w-16 "
                      src="/assets/imgs/services/5.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Climate Finance
                    </span>
                  </div>
                </div>

                <div
                  className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                    <img
                      className="  w-16 "
                      src="/assets/imgs/services/6.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Off Grid and Hybrid Power Systems
                    </span>
                  </div>
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