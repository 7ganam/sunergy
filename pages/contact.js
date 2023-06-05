import React from "react";
import Layout from "../components/layout/Layout";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-slate-100 z-0"
            style={{ zIndex: "-1" }}
          ></div>
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
      </Layout>
    </>
  );
};

export default Contact;
