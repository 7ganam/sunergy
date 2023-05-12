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
                  Market Entry Strategy
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
                  className="sm:max-w-sm lg:max-w-full mx-auto rounded-lg overflow-hidden shadow-2xl"
                  src="/assets/imgs/placeholders/ME.jpg"
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
                      Market Entry <br />
                      <span className="text-cyan-500">Strategy</span> service
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-slate-400 wow animate__animated animate__fadeIn whitespace-pre-line"
                    data-wow-delay=".1s"
                  >
                    {`Are you looking to expand your business into the Middle East and North Africa (MENA) market in the clean energy and sustainability space? Sunergy Advisory is here to help. Our market entry advisory services are designed specifically for the MENA region and provide expert guidance and support to help you successfully enter this dynamic market and achieve your business objectives.

Sunergy Advisory has a strong network of experts, end users, potential partners, investors and technology adopters in the MENA region.  This extensive network is the result of decades or work in the clean tech sector in MENA and it will applied to serving our clients and achieving the set out goals.

Our team of experienced professionals has a deep understanding of the clean energy and sustainability market in the MENA region, and we use this knowledge to help our clients identify opportunities, overcome challenges, and achieve success. We provide customized solutions that are tailored to meet the unique needs of each of our clients, ensuring that they are well-positioned to succeed in the MENA market.

Whether you are a start-up looking to launch a new product, kick off a Pilot proejct or an established business looking to expand into the MENA region, Sunergy Advisory can help. Contact us today to learn more about our market entry advisory services for the MENA market.

Areas of expertise include:

`}
                  </p>

                  <div className="flex flex-wrap">
                    <div
                      className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="w-8 mb-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Energy Efficiency
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm">
                          sunergy helps its customers achieve the highest
                          possible energy Efficiency
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="w-8 mb-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Solar energy
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm">
                          We have experts in both PV and CSP systems
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="w-8 mb-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Storage Solutions
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm">
                          we help with energy storage solutions and
                          implementations
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 text-cyan-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-cyan-500 text-white rounded">
                          4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Grid Management
                        </h3>
                        <p className="text-slate-400 leading-loose text-sm">
                          We help with designing analyzing and implementing
                          grids{" "}
                        </p>
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
