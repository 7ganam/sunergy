import { useEffect, useState } from "react";

import Link from "next/link";
import React from "react";

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll ? "bg-white sticky-bar mt-4 stick" : "bg-white sticky-bar mt-4"
        }
      >
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-semibold leading-none">
                <img
                  className="h-20"
                  src="/assets/imgs/logos/logo.png"
                  alt="Sunergy"
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="pt-4 pb-4">
                <Link href="/" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="/services" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    Services
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/services/market-research" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Market Research & Strategy Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/technology-assessment" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Technology Assessment
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/startup-advisory" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Startup Advisory
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/project-development" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Project Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ESG" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        ESG
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/event-and-content-management"
                      legacyBehavior
                    >
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Event and Content Management
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/about" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/contact" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    Contact Us
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="/activities" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    Activities
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/activities#publications" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                      Publications
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities#events" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                      Events
                      </a>
                    </Link>
                  </li>

                </ul>
              </li>
            </ul>
            <div className="hidden lg:block">
              <Link href="/contact" legacyBehavior className="mt-4">
                <a
                  className="mt-4 inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-cyan-400 hover:bg-cyan-400 rounded hover-up-2 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  Request Consultation
                </a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-cyan-500 hover:text-cyan-700 rounded border border-cyan-200 hover:border-cyan-300"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
