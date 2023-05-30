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
                      Inspiring
                      <span className="text-cyan-500"> Sustainable</span> Change
                    </h2>
                    <p className="text-slate-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                      We are <strong className="text-cyan-500">Sunergy</strong>,
                      a leading consulting and advisory firm based in the UAE
                      that specializes in the clean energy and sustainability
                      sector in the MENA region.
                      <span
                        className="typewrite d-inline text-brand"
                        data-period="3000"
                        data-type='["Web Agency", "Social Marketing" ]'
                      ></span>
                    </p>
                    {/* <p className="text-slate-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                      Supporting you with your Net Zero Carbon journey
                    </p> */}
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
                  <img
                    className="  w-16 "
                    src="/assets/imgs/about/q1.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Founded 2017
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
                    src="/assets/imgs/about/q2.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Leading consulting and advisory firm
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
                    src="/assets/imgs/about/q3.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Specializes in clean energy and sustainability sector
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
                    src="/assets/imgs/about/q4.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Based in the United of Arab Emirates
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
                    src="/assets/imgs/about/q5.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Specialized in the MENA region{" "}
                  </span>
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
                  <span>Our expert guidance and support </span>
                  <span className="text-cyan-500">help clients to</span>
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
                      src="/assets/imgs/about/q6.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Achieve their business objectives
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
                      src="/assets/imgs/about/q7.png"
                      alt="team"
                    />
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <div className="sm:text-2xl font-bold font-heading h-7"></div>
                    <span className="sm:text-2xl font-bold font-heading count">
                      Succeed in the dynamic and rapidly growing market
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center mt-44">
            <div className="max-w-lg mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                WHAT WE CAN DO
                <span className="text-cyan-500"> FOR YOU? </span>
              </h2>
              <p className="text-slate-400 leading-loose">We can help you in</p>
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-2 gap-4 pt-8 pb-16">
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <img
                    className="  w-16 "
                    src="/assets/imgs/about/q8.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Defining Your Net Zero Carbon journey
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
                    src="/assets/imgs/about/q9.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-2xl font-bold font-heading h-7"></div>
                  <span className="sm:text-2xl font-bold font-heading count">
                    Starting Your Decarbonization Process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20" id="our-team">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-cyan-100 text-cyan-600 rounded-xl">
                About Our Experts
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
              <Link href="/team/hazim-hamada" legacyBehavior>
                <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".1s"
                  >
                    <img
                      className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                      src="/assets/imgs/placeholders/hazem.png"
                      alt="Sunergy"
                    />
                    <strong className="mt-6 mb-2 text-md">Hazem Hamada</strong>
                    <p className="text-gray-500 text-xs mt-3">
                      Project Manager
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/team/raed-bkayrat" legacyBehavior>
                <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".3s"
                  >
                    <img
                      className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                      src="/assets/imgs/placeholders/raed.png"
                      alt="Sunergy"
                    />
                    <strong className="mt-6 mb-2 text-md">Raed Bkayrat</strong>
                    <p className="text-gray-500 text-xs mt-3">
                      Founder and Senior Advisor
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/team/ahmed-samir" legacyBehavior>
                <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".3s"
                  >
                    <img
                      className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                      src="/assets/imgs/placeholders/samir.png"
                      alt="Sunergy"
                    />
                    <strong className="mt-6 mb-2 text-md">
                      Ahmed Samir Elbermbali
                    </strong>
                    <p className="text-gray-500 text-xs mt-3">Partner</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id={"partners"}>
          <div className="text-center mb-8 mt-0">
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

        <section id={"clients"}>
          <div className="text-center mb-8 mt-20">
            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
              <span>Our </span>
              <span className="text-cyan-400">Clients</span>
            </h2>
            <p
              className="max-w-sm mx-auto text-lg text-slate-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              Our clients are leaders in the clean energy industry
            </p>
          </div>
          <div className="w-full bg-cyan-400 p-10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="p-3 bg-slate-400 rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w1.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w2.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w3.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w4.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-slate-400 rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w5.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w6.png"
                  alt="Sunergy"
                />
              </div>
              <div className="p-3 bg-white rounded-md ">
                <img
                  className="w-[90vw] md:w-auto md:h-28 mx-auto  object-cover rounded max-w-[70vw] "
                  src="/assets/imgs/about/w7.png"
                  alt="Sunergy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
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
