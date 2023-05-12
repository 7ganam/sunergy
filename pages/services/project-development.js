import React from "react";
import Layout from "../../components/layout/Layout";

const Services = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-slate-100">
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
        <section className="pt-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div
                className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/assets/imgs/placeholders/PM.webp"
                  alt="Monst"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                <div className="max-w-md-2">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-cyan-500 font-semibold bg-cyan-50 rounded-xl wow animate__animated animate__fadeInDown"
                      data-wow-delay=".9s"
                    >
                      our services
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <span className="text-cyan-500">Project </span>{" "}
                      Development & Finance
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-slate-400 wow animate__animated animate__fadeIn whitespace-pre-line"
                    data-wow-delay=".1s"
                  >
                    {`Bringing a clean energy or sustainability project to market can be challenging, especially when it comes to managing project risk, securing funding and executing the project. Sunergy Advisory provides full cycle project development and finance services to help you navigate these challenges and bring your project to market successfully.

Our team of experienced professionals has a deep understanding of the financial and regulatory landscape of the clean energy and sustainability market, and we use this knowledge to help our clients derisk projects, engage the right partners, secure funding and develop their projects successfully. Whether you need help with project planning, , finding the right technology, engaging with needed equity investors, securing qualified contractors, financial modeling, or regulatory compliance, we have the expertise to help you succeed.

Sunergy Advisory provides asset management services post the Commercial Operation Date of the project which include full O&M planning and execution, performance engineering, O&M management and billing services and collection.

At Sunergy Advisory, we are dedicated to helping our clients achieve their goals and succeed in the clean energy and sustainability market. Contact us today to learn more about our project development and finance services.

Our MENA expert network provides project development expertise in the following areas:
`}
                  </p>

                  <div className="flex flex-wrap">
                    <div
                      className="w-full flex items-start pt-4 pb-8 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Solar PV Utility, Commercial and Industrial sectors
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          EV infrastructure development
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Green Hydrogen
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Energy Efficiency
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          5
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Waste Management and Recycling
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          6
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Microgrids and Offgrid Power Systems
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 mr-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          7
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Manufacturing Plants for Clean Tech Products and
                          Systems
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm"></p>
                      </div>
                    </div>
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
