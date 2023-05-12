import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

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
                  alt="Monst"
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="pt-4 pb-4">
                <Link href="/" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    home
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="/services/market-entry" legacyBehavior>
                  <a className="text-sm font-semibold text-slate-600 hover:text-slate-500">
                    Services
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/services/market-entry" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Market Entry Strategy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital-marketing" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Digital Marketing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/content-management" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Content Management
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/project-development" legacyBehavior>
                      <a className="menu-sub-item text-sm text-slate-600 hover:text-slate-500">
                        Project Development & Finance
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
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              <Link href="/contact" legacyBehavior>
                <a className="btn-primary hover-up-2">Request consultation</a>
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
