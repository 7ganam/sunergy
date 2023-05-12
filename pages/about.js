import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
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
                  <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                      A consulting team
                      <span className="text-cyan-500"> focused</span> on your
                      best interests
                    </h2>
                    <p className="text-slate-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                      We are <strong className="text-cyan-500">Sunergy</strong>,
                      a Professional Consulting team
                      <span
                        className="typewrite d-inline text-brand"
                        data-period="3000"
                        data-type='["Web Agency", "Social Marketing" ]'
                      ></span>
                    </p>
                    <p className="text-slate-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                      supporting you with your Net Zero Carbon journey
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/services/market-entry" legacyBehavior>
                      <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-cyan-400 hover:bg-cyan-500 rounded wow animate__animatedanimated animate__fadeIn">
                        Our Services
                      </a>
                    </Link>
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
                        src="assets/imgs/team.jpg"
                        alt="team"
                      />
                      <img
                        className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                        src="/assets/imgs/elements/blob-tear.svg"
                        alt="team"
                      />
                      <img
                        className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                        src="/assets/imgs/elements/blob-tear.svg"
                        alt="team"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-6 pb-2">
          <div className="container">
            <div className="grid grid-cols-2 gap-4 pt-8 pb-16">
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Market Entry Strategy
                  </span>
                  <p className="text-xs sm:text-base text-slate-400">
                    Middle East and North Africa
                  </p>
                </div>
              </div>
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Content Management
                  </span>
                  <p className="text-xs sm:text-base text-slate-400">
                    Events & Conferences
                  </p>
                </div>
              </div>
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".6s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Project Development & Finance
                  </span>
                  <p className="text-xs sm:text-base text-slate-400">
                    Complete life cycle of project development
                  </p>
                </div>
              </div>
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".8s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Digital Marketing
                  </span>
                  <p className="text-xs sm:text-base text-slate-400">
                    Dedicated digital marketing campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                  <span>Who </span>
                  <span className="text-cyan-500">are</span>
                  <span> we?</span>
                  <br />
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-slate-400 leading-loose wow animate__animatedanimated animate__fadeIn whitespace-pre-line">
                  {`Sunergy Advisory is a leading consulting and advisory firm based in the UAE that specializes in the clean energy and sustainability sector in the MENA region. We provide expert guidance and support to help our clients achieve their business objectives and succeed in the dynamic and rapidly growing market for clean energy and sustainability solutions.

Sunergy Advisory aims at supporting its clients in defining their Net Zero Carbon journey and outlining the steps needed to start the decarbonization process, all with a positive impact on the corporate bottom line building on the ESG mandates for the client.

`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-cyan-100 text-cyan-600 rounded-xl">
                {" "}
                About Our Expert
              </span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                Our
                <span className="text-cyan-500"> Team </span>
              </h2>
              <p className="text-slate-400 leading-loose">
                Our services converge business and technology experts to help to
                manage business categories
              </p>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <img
                    className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                    src="/assets/imgs/placeholders/hazem.png"
                    alt="Monst"
                  />
                  <strong className="mt-6 mb-2 text-md">Hazem Hamada</strong>
                  <p className="text-gray-500 text-xs mt-3">Project Manager</p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".3s"
                >
                  <img
                    className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                    src="/assets/imgs/placeholders/raed.png"
                    alt="Monst"
                  />
                  <strong className="mt-6 mb-2 text-md">Raed Bkayrat</strong>
                  <p className="text-gray-500 text-xs mt-3">Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-cyan-100 text-cyan-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  We will <span className="text-cyan-500">be glad</span> to hear
                  from you!
                </h2>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-slate-50 rounded outline-none"
                      placeholder="Message..."
                    ></textarea>
                  </div>

                  <div
                    className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
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
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-cyan-500 hover:bg-cyan-700 rounded"
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
        <section className="py-20 bg-cyan-500">
          <div className="container">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                <span>Subscribe now to </span>
                <span className="text-cyan-200">Our Newsletter</span> <br />
              </h2>
              <p className="mb-8 text-slate-200">
                All your information is completely confidential
              </p>
              <div className="flex flex-wrap max-w-lg mx-auto">
                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-cyan-500 border border-cyan-300 rounded">
                  <svg
                    className="h-6 w-6 my-auto text-cyan-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input
                    className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-cyan-500 outline-none"
                    type="text"
                    placeholder="Type your e-mail"
                  />
                </div>
                <button
                  className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
