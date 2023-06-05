import React from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-32 pb-0 bg-slate-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Services
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-cyan-500 text-gray-800">
                  Home
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-cyan-500 text-gray-800">
                  Our Services
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-cyan-500 text-gray-800">
                  Content Management
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="pt-20 pb-16 xl:bg-contain bg-top bg-no-repeat">
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>CONTENT</span>
                <span className="text-cyan-500"> MANAGMENT </span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeInDown"
                data-wow-delay=".5s"
              ></p>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    className="h-32 mb-6 mx-auto"
                    src="/assets/imgs/services/e1.png"
                    alt="Sunergy"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Expert Content Management{" "}
                  </h3>

                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-slate-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Event and conference services</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Wide range of Connections</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Clean energy focus</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Awareness of the MENA Market</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    className="h-32 mb-6 mx-auto"
                    src="/assets/imgs/services/e2.png"
                    alt="Sunergy"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    High-Quality Results{" "}
                  </h3>

                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-slate-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>High-quality content delivery</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Brand building</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Business objective achievement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    className="h-32 mb-6 mx-auto"
                    src="/assets/imgs/services/e3.png"
                    alt="Sunergy"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Proven Track Record
                  </h3>

                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-slate-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Leading organizations</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Notable organizations</span>
                      </li>
                      <li className="flex mb-3 ml-5">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Clean Energy Business Council</span>
                      </li>

                      <li className="flex mb-3 ml-5">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-start">
                          Middle East Solar Industry Association
                        </span>
                      </li>
                    </ul>
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
                <span>Other </span>
                <span className="text-cyan-400">Services </span>
              </h2>
            </div>
            <div className="w-full">
              <div className="  -mb-6 text-center flex flex-wrap gap-5 justify-center">
                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/4.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Project Development& Finance
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Our team's wealth of experience in project development and
                      finance enables successful solutions that drive business
                      success.
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
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/5.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      ESG& Impact Reporting
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Helping our clients to communicate their sustainability
                      strategies and performance in a clear and compelling way.
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

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/1.jpg"
                      alt="Sunergy"
                    />
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      Market Entry Strategy
                    </h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      We've established a strong track record of partnering with
                      clients to successfully penetrate the MENA region,
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
                  className="hover-up- xs:w-full md:w-[370px] h-[420px]  px-3 mb-6 wow animate__animated animate__fadeIn "
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/2.jpg"
                      alt="Sunergy"
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
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
