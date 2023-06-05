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
                  Project Development & Finance
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
                <span>PROJECT DEVELOPMENT</span>
                <span className="text-cyan-500"> & FINANCE </span>
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
                    src="/assets/imgs/services/e4.png"
                    alt="Sunergy"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Full Cycle Project Development
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
                        <span>Project planning</span>
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
                        <span>Technology selection</span>
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
                        <span>Investor engagement</span>
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
                        <span>Financial modeling</span>
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
                        <span>Regulatory compliance</span>
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
                        <span>Contractor selection</span>
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
                    src="/assets/imgs/services/e5.png"
                    alt="Sunergy"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Asset Management Services{" "}
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
                        <span>Commercial Operation Date posting</span>
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
                        <span>O&M planning and execution</span>
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
                        <span className="text-start">
                          Billing and asset management services
                        </span>
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
                        <span>O&M management</span>
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
                    src="/assets/imgs/services/e6.png"
                    alt="Sunergy"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    AREAS OF EXPERTISE{" "}
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
                        <span className="text-start">
                          Solar PV (Utility, Commercial and Industrial sectors)
                        </span>
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
                        <span className="text-start">
                          Electric Vehicles (Infrastructure Development)
                        </span>
                      </li>
                      <li className="flex mb-3 ">
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
                        <span className="text-start">Energy Efficiency</span>
                      </li>

                      <li className="flex mb-3 ">
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
                        <span className="text-start">Climate Finance</span>
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
                        <span className="text-start">Storage Solutions</span>
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

                <div
                  className="hover-up- xs:w-full md:w-[370px] h-[420px] px-3 mb-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="p-6 bg-white shadow rounded h-full">
                    <img
                      className="h-36 mx-auto mb-4 w-full object-cover rounded"
                      src="/assets/imgs/home/3.jpg"
                      alt="Sunergy"
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
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
