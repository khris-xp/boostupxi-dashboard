import Image from "next/image";
import Link from "next/link";
import Close from "../../public/icons/close.svg";
import Menu from "../../public/icons/menu.svg";
import { useState, Fragment } from "react";
import { NextPage } from "next";

const Navbar: NextPage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <Fragment>
      <div className="mb-21">
        <nav className="w-full bg-black shadow sticky top-0 z-30">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/">
                  <h2 className="text-2xl font-bold text-white">
                    CE Boostup Task Upload
                  </h2>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white hover:text-second-color">
                    <Link href="/uploadPage" onClick={() => setNavbar(false)}>
                      <button className="bg-green-600 p-2 hover:bg-green-800 rounded-xl">
                        Create Task
                      </button>
                    </Link>
                  </li>
                  <li className="text-white hover:text-second-color">
                    <Link href="/taskPage" onClick={() => setNavbar(false)}>
                      All Task
                    </Link>
                  </li>
                  <li className="text-white hover:text-second-color">
                    <Link href="/login" onClick={() => setNavbar(false)}>
                      65010107@KMITL.AC.TH
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
