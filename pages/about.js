import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";

const images = [
  "/assets/imgs/home/l1.png",
  "/assets/imgs/home/l2.png",
  "/assets/imgs/home/l3.png",
  "/assets/imgs/home/l4.png",
  "/assets/imgs/home/l5.png",
  "/assets/imgs/home/l6.jpeg",
  "/assets/imgs/home/l7.jpeg",
];

const images2 = [
  "/assets/imgs/about/w1.png",
  "/assets/imgs/about/w2.png",
  "/assets/imgs/about/w3.png",
  "/assets/imgs/about/w4.png",
  "/assets/imgs/about/w5.png",
  "/assets/imgs/about/w6.png",
  "/assets/imgs/about/w7.png",
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
                  Inspiring Sustainable Change
                </h1>
                <p className="mt-6 text-xl leading-8 text-white z-30">
                  Sunergy is a leading Clean Tech consulting and advisory firm
                  based in the UAE that specializes in the clean energy and
                  sustainability sectors in the MENA region.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-400 h-4"></div>
          {/* <div class=" inset-0 bg-gradient-to-b from-cyan-300 to-slate-200 h-4"></div> */}
        </section>

        <section className=" " id="key-features">
          <div className="w-full min-h-[300px] bg-cyan-400 flex items-center  justify-center">
            <div className="container grid-cols-1 justify-center flex-wrap  grid  md:grid-cols-3 ">
              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 min-w-[50px] md:min-w-[96px]">
                  <img
                    className="  w-16 max-w-[80%]"
                    src="/assets/imgs/about/q1.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <div className="sm:text-xl  count text-white font-bold ">
                    Founded 2017
                  </div>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 min-w-[50px] md:min-w-[96px]">
                  <img
                    className="  w-16 max-w-[80%]"
                    src="/assets/imgs/about/q2.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-xl  count text-white font-bold">
                    Leading consulting and advisory firm
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 min-w-[50px] md:min-w-[96px]">
                  <img
                    className="  w-16 max-w-[80%]"
                    src="/assets/imgs/about/q3.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-xl  count text-white font-bold">
                    Specializes in clean energy and sustainability sector
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 min-w-[50px] md:min-w-[96px]">
                  <img
                    className="  w-16 max-w-[80%]"
                    src="/assets/imgs/about/q4.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-xl  count text-white font-bold">
                    Based in the United of Arab Emirates
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 min-w-[50px] md:min-w-[96px]">
                  <img
                    className="  w-16 max-w-[80%]"
                    src="/assets/imgs/about/q5.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-xl  count text-white font-bold">
                    Specialized in the MENA region
                  </span>
                </div>
              </div>

              <div
                className="flex  lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn items-center  "
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-slate-50 text-cyan-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24 min-w-[50px] md:min-w-[96px]">
                  <img
                    className="  w-16 max-w-[80%]"
                    src="/assets/imgs/services/6.png"
                    alt="team"
                  />
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-xl  count text-white font-bold">
                    Provides professional services and support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={"partners"} className="bg-slate-100">
          <div className="text-center mb-8 mt-0 pt-16">
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

          <div class="relative flex overflow-x-hidden bg-cyan-400">
            <div class="py-12 animate-marquee whitespace-nowrap  flex items-center">
              {images.map((image, index) => (
                <div
                  class="px-4 h-[150px] max-w-[70vw] bg-white min-w-[250px] m-4 rounded-xl"
                  key={index}
                >
                  <img
                    src={image}
                    alt=""
                    className=" p-4   mx-auto  object-contain rounded h-[100%] w-[100%]"
                  />
                </div>
              ))}
            </div>

            <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
              {images.map((image, index) => (
                <div
                  class="px-4 h-[150px] max-w-[70vw] bg-white min-w-[250px] m-4 rounded-xl"
                  key={index}
                >
                  <img
                    src={image}
                    alt=""
                    className="p-4  mx-auto  object-contain rounded h-[100%] w-[100%]"
                  />
                </div>
              ))}
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

          <div class="relative flex overflow-x-hidden bg-cyan-400">
            <div class="py-12 animate-marquee whitespace-nowrap  flex items-center">
              {images2.map((image, index) => (
                <div
                  class="px-4 h-[150px] max-w-[70vw] bg-white min-w-[250px] m-4 rounded-xl"
                  key={index}
                >
                  <img
                    src={image}
                    alt=""
                    className=" p-4   mx-auto  object-contain rounded h-[100%] w-[100%]"
                  />
                </div>
              ))}
            </div>

            <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
              {images2.map((image, index) => (
                <div
                  class="px-4 h-[150px] max-w-[70vw] bg-white min-w-[250px] m-4 rounded-xl"
                  key={index}
                >
                  <img
                    src={image}
                    alt=""
                    className="p-4  mx-auto  object-contain rounded h-[100%] w-[100%]"
                  />
                </div>
              ))}
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
                <div className="w-1/2 lg:w-1/3 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".1s"
                  >
                    <img
                      className="mb-6 h-64 w-64 mx-auto rounded-full object-cover object-top"
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
                <div className="w-1/2 lg:w-1/3 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".3s"
                  >
                    <img
                      className="mb-6 h-64 w-64 mx-auto rounded-full object-cover object-top"
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
              {/* <Link href="/team/ahmed-samir" legacyBehavior>
                <div className="w-1/2 lg:w-1/3 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".3s"
                  >
                    <img
                      className="mb-6 h-64 w-64 mx-auto rounded-full object-cover object-top"
                      src="/assets/imgs/placeholders/samir.png"
                      alt="Sunergy"
                    />
                    <strong className="mt-6 mb-2 text-md">
                      Ahmed Samir Elbermbali
                    </strong>
                    <p className="text-gray-500 text-xs mt-3">Partner</p>
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Contact <span className="text-cyan-500">Us</span>
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
                      placeholder="email"
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
      </Layout>
    </>
  );
};

export default About;
