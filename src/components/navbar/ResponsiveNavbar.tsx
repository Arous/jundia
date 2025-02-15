import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer/Footer";

import useDarkSide from "@/features/darkmode/useDarkSide";
// import ToggleDarkButton from "@/features/darkmode/ToggleDarkButton";
import DarkLightButton from "@/features/darkmode/DarkLightButton";
import MainRoutes from "@/routes/MainRoutes";
import { BsFacebook } from "react-icons/all";
import InstagramIcon from "../icons/Instagram";
import TikTokIcon from "../icons/TikTok";
import YoutubeIcon from "../icons/Youtube";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  // const { theme, toggleTheme } = useDarkMode();
  const [theme, toggleTheme] = useDarkSide();

  console.log(isOpen);

  return (
    <div>
      <nav
        className="
          bg-slate-400 
          dark:bg-slate-700 
          fixed top-0 w-full z-50
          bg-opacity-70
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <div className="text-white">
                  🎪 Jundia Circus
                </div> */}

                <Link to="/about">
                  <img
                    className="h-12 w-12"
                    src="/assets/images_compressed/logo/jundia_logo_whtie.png"
                    alt="Workflow"
                  />
                </Link>

                {/* { theme === 'light' &&
                <img
                  className="h-12 w-12"
                  src="/assets/images/logo/jundia_logo_black.png"
                  alt="Workflow"
                />
                } */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/about"
                    className=" hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    ABOUT
                  </Link>

                  <Link
                    to="/shows"
                    // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className=" hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SHOW
                  </Link>

                  <Link
                    to="/photo"
                    // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className=" hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    PHOTO
                  </Link>

                  <Link
                    to="/contact"
                    // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className=" hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CONTACT
                  </Link>

                  <div className="flex">
                    <Link
                      // className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      className="flex hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="https://www.facebook.com/lee.joonsang.10?mibextid=LQQJ4d"
                    >
                      <BsFacebook />
                    </Link>

                    <Link
                      // className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      className="flex hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="https://instagram.com/jundia_cirque?igshid=YmMyMTA2M2Y="
                    >
                      {/* INSTAGRAM */}
                      <InstagramIcon />
                    </Link>

                    <Link
                      // className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      className=" hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="https://www.youtube.com/channel/UCbsPiJ-PH1jvLdvlZwuqicw"
                    >
                      {/* YOUTUBE */}
                      <YoutubeIcon />
                    </Link>

                    <Link
                      // className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      className=" hover:bg-gray-700 text-slate-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="https://www.tiktok.com/@jundia_cirque"
                    >
                      {/* TIKTOK */}
                      <TikTokIcon />
                    </Link>
                  </div>

                  <div className="flex flex-col items-center trainsition duration-200 ">
                    <DarkLightButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/about"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ABOUT
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  to="/shows"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  SHOW
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  to="/photo"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  PHOTO
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  to="/contact"
                  // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  CONTACT
                </Link>

                <div className="flex justify-center mt-3">
                  <Link
                    // className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="https://www.facebook.com/lee.joonsang.10?mibextid=LQQJ4d"
                  >
                    <BsFacebook />
                  </Link>

                  <Link
                    className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="https://instagram.com/jundia_cirque?igshid=YmMyMTA2M2Y="
                  >
                    {/* INSTAGRAM */}
                    <InstagramIcon />
                  </Link>

                  <Link
                    className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="https://www.youtube.com/channel/UCbsPiJ-PH1jvLdvlZwuqicw"
                  >
                    {/* YOUTUBE */}
                    <YoutubeIcon />
                  </Link>

                  <Link
                    className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="https://www.tiktok.com/@jundia_cirque"
                  >
                    {/* TIKTOK */}
                    <TikTokIcon />
                  </Link>

                  <div className="flex flex-col items-center trainsition duration-200 px-3 py-1 ">
                    <DarkLightButton />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header> */}

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          {/* <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div> */}
          {/* <!-- /End replace --> */}
          <MainRoutes />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Nav;
