import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="py-20 bg-cyan-400">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn "
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0 ">
              <Link href="/" legacyBehavior>
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <img
                    className="h-20 bg-white rounded-xl"
                    src="/assets/imgs/logos/logo.png"
                    alt="Sunergy"
                  />
                </a>
              </Link>
            </div>
            <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-white leading-relaxed">
                Sunergy is a leading Clean Tech consulting and advisory firm
                based in the UAE that specializes in the clean energy and
                sustainability sectors in the
                <strong> MENA region.</strong>
              </p>
            </div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-slate-800">
                Office
              </p>
              <p className="lg:text-lg text-white">
                Ajman Free Zone, B4 Ajman, UAE
              </p>
            </div>
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-slate-800">
                Contacts
              </p>

              <p className="lg:text-lg text-white">info@sunergyadvisory.com</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-white">
              &copy; 2023. All rights reserved.
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a
                className="inline-block px-2 h-2"
                href="https://www.linkedin.com/company/sunergy-advisory/"
              >
                <img src="/assets/imgs/icons/linkedin.png" alt="Sunergy" />
              </a>
              <a className="inline-block px-2 h-2" href="https://youtube.com">
                <img src="/assets/imgs/icons/youtube.png" alt="Sunergy" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
