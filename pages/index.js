import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import Slider2 from "../components/slider/Slider2";
import TextEffect from "../components/elements/TextEffect";
import axios from "axios";

const images = [
  "/assets/imgs/home/l1.png",
  "/assets/imgs/home/l2.png",
  "/assets/imgs/home/l3.png",
  "/assets/imgs/home/l4.png",
  "/assets/imgs/home/l5.png",
];

const Index2 = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    setLoading(true);

    axios({
      method: "POST",
      url: "https://formspree.io/f/xknaadov",
      data: data,
    })
      .then((response) => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        setSuccess(false);
        setLoading(false);
      });
  };

  const onErrors = (errors) => console.error(errors);

  const displaySubmitButton = () => {
    if (success) {
      return (
        <span className="ml-auto inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Form submitted successfully
        </span>
      );
    } else if (loading) {
      return <div>loading...</div>;
    } else {
      return (
        <button
          className="ml-auto py-4 px-8 text-sm text-white font-semibold leading-none bg-cyan-500 hover:bg-cyan-700 rounded"
          type="submit"
        >
          Submit
        </button>
      );
    }
  };

  return (
    <>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div className="relative isolate overflow-hidden pt-14">
            <img
              src="/assets/imgs/home/header.jpg"
              alt=""
              className="absolute inset-0 z-10 h-full w-full object-cover"
            />
            <div class="z-20 absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-30">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl -z-30">
                  A Specialized Consulting and Advisory Firm Based in the UAE
                </h1>
                <p className="mt-6 text-xl leading-8 text-white">
                  We are committed to helping both public and private sector
                  entities, with existing or planned presence in MENA, navigate
                  the complexities of the clean energy and sustainability
                  markets through our unique consulting and advisory services.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <div className="text-center lg:text-left">
                    <a
                      className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded wow animate__animated animate__fadeIn"
                      href="/contact"
                    >
                      Request Consultation
                    </a>
                    <a
                      className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-slate-500 hover:text-slate-600 text-center font-semibold leading-none bg-white border border-slate-200 hover:border-slate-300 rounded wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                      href="/about"
                    >
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cyan-400 h-4"></div>
          {/* <div class=" inset-0 bg-gradient-to-b from-cyan-300 to-slate-200 h-4"></div> */}
        </section>

        <section className="pt-1 pb-20 bg-slate-100" id="key-features">
          <div className="container">
            <div className="text-center mb-8 mt-16">
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
                  <div className="p-6 bg-white shadow rounded h-full">
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
                    <h3 className="mb-2 font-bold font-heading text-xl">ESG</h3>
                    <p className="text-sm text-blueGray-400 leading-relaxed">
                      Helping our clients to communicate their sustainability
                      strategies and performance in a clear and compelling way.
                    </p>
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
                  <div className="p-6 bg-white shadow rounded h-full">
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
                  <div className="p-6 bg-white shadow rounded h-full">
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
                  <div className="p-6 bg-white shadow rounded h-full">
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
                  <div className="p-6 bg-white shadow rounded h-full">
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

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="flex flex-wrap -mx-3 justify-center">
              <div className="relative  mb-8 lg:mb-0 text-center ">
                <div className="max-w-md lg:max-w-lg mx-auto lg:ml-0 mb-6 lg:mb-0">
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
                <div class="px-12" key={index}>
                  <img
                    src={image}
                    alt=""
                    className="bg-white h-[100px] p-4 rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>

            <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
              {images.map((image, index) => (
                <div class=" px-12" key={index}>
                  <img
                    src={image}
                    alt=""
                    className="bg-white h-[100px] p-4 rounded-lg shadow-lg"
                  />
                </div>
              ))}
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
              </div>
              <div className="flex flex-wrap -mx-3 text-center justify-center">
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
                <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
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
                          name="subject"
                          {...register("subject", {
                            required: true,
                          })}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                          type="text"
                          placeholder="Name"
                          name="name"
                          {...register("name", {
                            required: true,
                          })}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-slate-50 rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                          name="email"
                          {...register("email", {
                            required: true,
                          })}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-slate-50 rounded outline-none"
                        placeholder="Message..."
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    {displaySubmitButton()}

                    {/* <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded"
                      type="submit"
                    >
                      Submit
                    </button> */}
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
