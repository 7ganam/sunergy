import React from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-slate-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Team
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <Link href="/" legacyBehavior className="mt-4">
                  <a className="hover:text-cyan-500 text-gray-800">Home</a>
                </Link>

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
                <Link href="/about#our-team" legacyBehavior className="mt-4">
                  <a className="hover:text-cyan-500 text-gray-800">Our Team</a>
                </Link>

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
                  Hazim Hamada
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="pt-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div
                className="w-full md:w-1/3 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto rounded-lg overflow-hidden shadow-2xl"
                  src="/assets/imgs/placeholders/hazem.png"
                  alt="Sunergy"
                />
                <h2
                  className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Hazem Hamada
                </h2>
                <h3
                  className="text-2xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <span className="text-cyan-500">Project Manager </span>
                </h3>
              </div>

              <div className="w-full md:w-2/3 px-3 order-1 md:order-1">
                <div className="max-w-md-2">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-cyan-500 font-semibold bg-cyan-50 rounded-xl wow animate__animated animate__fadeInDown"
                      data-wow-delay=".9s"
                    >
                      BIO
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <span className="text-cyan-500">Overview</span>
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-slate-400 wow animate__animated animate__fadeIn whitespace-pre-line"
                    data-wow-delay=".1s"
                  >
                    {`A renewable energy engineer and project manager, has led successful projects such as Zewail City Science Festival and Quick Scan for the Egyptian ports and renewable energy markets. He is committed to advancing clean energy adoption in Egypt and the MENA region.`}
                  </p>

                  <div className="mb-4">
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <span className="text-cyan-500">Areas of Expertise</span>
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-slate-400 wow animate__animated animate__fadeIn whitespace-pre-line"
                    data-wow-delay=".1s"
                  >
                    {`Digital Marketing
Market Entry Strategy
Content Management
Project Development & Finance
ESG & Impact Reporting.`}
                  </p>

                  <div className="mb-4">
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <span className="text-cyan-500">Education</span>
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-slate-400 wow animate__animated animate__fadeIn whitespace-pre-line"
                    data-wow-delay=".1s"
                  >
                    {`BS, Renewable Energy Engineering, Zewail City of Science and Technology, 2016 – 2021
Digital Marketing Professional Nano Degree Program, Udacity, 2021
`}
                  </p>

                  <div className="mb-4">
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <span className="text-cyan-500">
                        Selected Experiences
                      </span>
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-slate-400 wow animate__animated animate__fadeIn whitespace-pre-line"
                    data-wow-delay=".1s"
                  >
                    {`PractiQ Consulting: Business Analyst
SAWAAID: Project Coordinator
Zewail City Science Festival  2021: Project Manager
ReNile: Business Developer
New and Renewable Energy Authority (NREA-eg): Renewable Energy Engineering Intern
ELSEWEDY ELECTRIC: Renewable Energy Engineering Intern
First Co. for Industrial Development S.A.E.: Mechanical Engineering Intern
`}
                  </p>
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
