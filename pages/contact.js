import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import TextEffect from "../components/elements/TextEffect";
import axios from "axios";

const Contact = () => {
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
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-slate-100 z-0"
            style={{ zIndex: "-1" }}
          ></div>
        </section>
        <section className="py-20 my-32">
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
                <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
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
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
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
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
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
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-slate-50 rounded outline-none"
                      placeholder="Message..."
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                    ></textarea>
                  </div>

                  <div
                    className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    {displaySubmitButton()}
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
