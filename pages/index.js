import React from "react";
import Layout from "../components/layout/Layout";
import Slider2 from "../components/slider/Slider2";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";

const Index2 = () => {
  return (
    <>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-slate-100 z-0"
            style={{ zIndex: "-1" }}
          ></div>
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div className="max-w-lg lg:max-w-lg mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                      Sunergy <span className="text-cyan-400">Advisory</span>{" "}
                    </h2>
                    <div className="text-slate-400 leading-relaxed wow animate__animated animate__fadeIn">
                      We are <strong className="text-cyan-400">Sunergy</strong>,
                      A leading consulting and advisory firm based in the UAE
                      that specializes in the clean energy and sustainability
                      sector in the MENA region. We provide expert guidance and
                      support to help our clients achieve their business
                      objectives and succeed in the dynamic and rapidly growing
                      market for clean energy and sustainability solutions.
                      <div className="typewrite d-inline text-brand">
                        <TextEffect
                          text1="Market Entry Strategy"
                          text2="Digital Marketing"
                          text3="Content Management"
                          text4="Project Development & Finance"
                        />
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm uppercase">
                      Helping you maximize operations management with
                      digitization
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <a
                      className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded wow animate__animated animate__fadeIn"
                      href="/contact"
                    >
                      request consultation
                    </a>
                    <a
                      className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-slate-500 hover:text-slate-600 text-center font-semibold leading-none bg-white border border-slate-200 hover:border-slate-300 rounded wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                      href="/about"
                    >
                      about us
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-slate-100 mb-12 lg:mb-0 pb-10 lg:h-[400px]">
                <div className="flex items-center justify-center ">
                  <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                    <div
                      className="wow animate__animated animate__fadeIn lg:w-[450px]"
                      data-wow-delay=".5s"
                    >
                      <img
                        className="jump relative mx-auto rounded-xl  z-10 lg:h-[350px]  object-cover shadow-xl "
                        // src="https://media.istockphoto.com/id/157735285/photo/solar-panel-with-clear-sky.jpg?s=170667a&w=0&k=20&c=LzZCR5EPxIMouqVmRKLPh-Rw-Qm-lRyjtBL_7YralX8="
                        src="/assets/imgs/home/home.jpg"
                        alt="Sunergy"
                      />
                      <img
                        className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                        src="/assets/imgs/elements/blob-tear.svg"
                        alt="Sunergy"
                      />
                      <img
                        className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                        src="/assets/imgs/elements/blob-tear.svg"
                        alt="Sunergy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-20" id="key-features">
          <div className="container">
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <span>
                    Sunergy Advisory aims at supporting its clients in defining
                    their{" "}
                  </span>
                  <br />
                  <span className="text-cyan-400">Net Zero Carbon journey</span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p
                  className="lg:pl-16 text-slate-400 leading-loose wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  outlining the steps needed to start the decarbonization
                  process, all with a positive impact on the corporate bottom
                  line and building on the ESG mandates for the client. Sunergy
                  Advisory taps into a wide set of leading experts in the MENA
                  region to cover different aspects of project development,
                  technology assessment, market strategy, product development,
                  and stakeholder engagement.
                </p>
              </div>
            </div>
            <div className="text-center mb-8 mt-20">
              <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                <span>Our </span>
                <span className="text-cyan-400">Services </span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                We are committed to helping organizations in the MENA region
                navigate the complexities of the clean energy and sustainability
                sector through our specialized consulting and advisory services.
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

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="flex flex-wrap -mx-3">
              <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                  <h2
                    className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <span className="text-cyan-400">Personalized</span>{" "}
                    Consulting Services
                  </h2>
                  <p
                    className="text-xs md:text-base text-slate-400 leading-loose wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    Achieve your clean energy objectives with Sunergy Advisory's
                    customized solutions.
                  </p>
                </div>
                <Link href="/contact" legacyBehavior className="mt-4">
                  <a
                    className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    Request Consultation
                  </a>
                </Link>
                <div
                  className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div id="carausel-fade-1-arrows" className="flex"></div>
                </div>
              </div>
              <div
                className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="relative w-full rounded">
                  <div
                    className="carausel-fade slick-carausel rounded"
                    id="carausel-fade-1"
                  >
                    <Slider2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={"partners"}>
          <div className="text-center mb-8 mt-20">
            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
              <span>Our </span>
              <span className="text-cyan-400">Partners </span>
            </h2>
            <p
              className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              Sunergy is proud to have strong partnerships with leading
              companies in the clean energy industry
            </p>
          </div>
          <div className="w-full bg-cyan-400 p-10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/home/l1.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/home/l2.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/home/l3.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/home/l4.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/home/l5.png"
                  alt="Sunergy"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat w-full"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
        >
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="text-slate-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-cyan-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-slate-400">Phone</span>
                    <p>+ +971 50 953 8852</p>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-cyan-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-slate-400">E-mail</span>
                    <p>info@sunergyadvisory.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-cyan-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-slate-400">Address</span>
                    <p>Ajman Free Zone, B4</p>
                    <p>Ajman, UAE</p>
                  </div>
                </div>
              </div>
              <div>
                <form>
                  <div
                    className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-slate-50 rounded outline-none"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <label>
                      <input
                        className="mr-1"
                        type="checkbox"
                        name="terms"
                        value="1"
                      />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
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
