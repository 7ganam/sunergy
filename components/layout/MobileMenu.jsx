import React, { useState } from "react";

import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-slate-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
          <div className="flex items-center mb-8">
            <Link href="#" legacyBehavior>
              <a className="mr-auto text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/logo.png"
                  alt="Sunergy"
                />
              </a>
            </Link>
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="h-6 w-6 text-slate-400 cursor-pointer hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li className="mb-1 rounded-xl">
                <Link href="/" legacyBehavior>
                  <a className="block p-4 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={
                  isActive.key == 1
                    ? "mb-1 menu-item-has-children rounded-xl active"
                    : "mb-1 menu-item-has-children rounded-xl"
                }
                onClick={() => handleToggle(1)}
              >
                <span className="menu-expand">+</span>
                <Link href="#" legacyBehavior>
                  <a className="block p-4 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                    Services
                  </a>
                </Link>
                <ul className={isActive.key == 1 ? "dropdown pl-5" : "hidden"}>
                  <li>
                    <Link href="/services/market-research" legacyBehavior>
                      <a className="block p-3 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                        Market Research
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/technology-assessment" legacyBehavior>
                      <a className="block p-3 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                        Technology Assessment
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/startup-advisory" legacyBehavior>
                      <a className="block p-3 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                        Startup Advisory
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/project-development" legacyBehavior>
                      <a className="block p-3 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                        Project Development & Finance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ESG" legacyBehavior>
                      <a className="block p-3 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                        ESG
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/event-and-content-management"
                      legacyBehavior
                    >
                      <a className="block p-3 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                        Event and Content Management
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1 rounded-xl">
                <Link href="/about" legacyBehavior>
                  <a className="block p-4 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contact" legacyBehavior>
                  <a className="block p-4 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-500">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-slate-100">
              <Link href="/contact" legacyBehavior>
                <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded">
                  Request consultation
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-auto">
            <a className="inline-block px-1" href="https://facebook.com">
              <img src="/assets/imgs/icons/facebook-blue.svg" alt="Sunergy" />
            </a>
            <a className="inline-block px-1" href="https://twitter.com">
              <img src="/assets/imgs/icons/twitter-blue.svg" alt="Sunergy" />
            </a>
            <a className="inline-block px-1" href="https://www.instagram.com">
              <img src="/assets/imgs/icons/instagram-blue.svg" alt="Sunergy" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
