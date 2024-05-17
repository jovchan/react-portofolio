import { Fragment , useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [colorChange, setColorChange] = useState({ jc: false, about: false, blog: false, contact: false });

  useEffect(() => {
    const timer1 = setTimeout(() => setColorChange(prev => ({ ...prev, jc: true })), 200);
    const timer2 = setTimeout(() => setColorChange(prev => ({ ...prev, about: true })), 400);
    const timer3 = setTimeout(() => setColorChange(prev => ({ ...prev, blog: true })), 600);
    const timer4 = setTimeout(() => setColorChange(prev => ({ ...prev, contact: true })), 800);
    const timer5 = setTimeout(() => setColorChange(prev => ({ ...prev, dark: true })), 1000);
    const timer6 = setTimeout(() => setColorChange(prev => ({ ...prev, light: true })), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div className="text-6xl text-abu sm:text-7 bg-hitam">
      <nav className="druk p-4 h-16 my-2">
        <ul className="flex justify-between items-center h-full">
          <li className="flex-grow flex items-center m-3">
          <span className={`hover:text-abu transition-all duration-200 transform hover:scale-110 ${colorChange.jc ? 'text-oren' : ''}`}>
              <a href="#">J.C</a>
            </span>
          </li>
          <div className="flex-grow justify-between hidden sm:flex">
          <li className={`hover:text-abu px-3 rounded-md transition-all duration-200 transform hover:scale-110 ${colorChange.about ? 'text-oren' : ''}`}>
              <a href="#">ABOUT</a>
            </li>
            <li className={`hover:text-abu px-3 rounded-md transition-all duration-200 transform hover:scale-110 ${colorChange.blog ? 'text-oren' : ''}`}>
              <a href="#">BLOG</a>
            </li>
            <li className={`hover:text-abu px-3 rounded-md transition-all duration-200 transform hover:scale-110 ${colorChange.contact ? 'text-oren' : ''}`}>
              <a href="#">CONTACT</a>
            </li>
            <li className=" flex items-center mr-6">
              <div className="flex">
                <span className={`mr-2 hidden xl:flex transition-all duration-200 ${colorChange.dark ? 'text-oren' : ''}`}>DARK</span>
                <input type="checkbox" className="hidden" id="dark-toggle" />
                <label htmlFor="dark-toggle">
                  <div className="flex h-6 w-14 cursor-pointer my-4 items-center rounded-full bg-abu p-1">
                    <div className="toggle-circle h-4 w-4 rounded-full bg-oren transition duration-300 ease-in-out"></div>
                  </div>
                </label>
                <span className={`ml-2 hidden xl:flex transition-all duration-200 ${colorChange.light ? 'text-oren' : ''}`}>LIGHT</span>
              </div>
            </li>
          </div>

          <Menu
            as="div"
            className="relative inline-block text-left sm:hidden mr-2"
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-abu-gelap px-2 py-1 font-semibold text-oren shadow-sm   hover:bg-abu-gelap">
                MENU
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-4 w-64 origin-top-right rounded-md bg-abu-gelap shadow-lg focus:outline-none">
                <div className="py-1">
                  <Menu.Item className="transition-all duration-200 transform hover:scale-110">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-oren text-hitam rounded-md"
                            : "text-oren",
                          "block px-4 py-2"
                        )}
                      >
                        ABOUT
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="transition-all duration-200 transform hover:scale-110">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-oren text-hitam rounded-md"
                            : "text-oren",
                          "block px-4 py-2"
                        )}
                      >
                        BLOG
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="transition-all duration-200 transform hover:scale-110">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-oren text-hitam rounded-md"
                            : "text-oren",
                          "block px-4 py-2"
                        )}
                      >
                        CONTACT
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="transition-all duration-200 transform">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "text-oren rounded-md" : "text-oren",
                          "block px-4 py-2"
                        )}
                      >
                        <li className=" flex items-center lg:mt-0">
                          <div className="flex">
                            <span className="mr-2">DARK</span>
                            <input
                              type="checkbox"
                              className="hidden"
                              id="dark-toggle"
                            />
                            <label htmlFor="dark-toggle">
                              <div className="flex h-6 w-14 cursor-pointer my-4 items-center rounded-full bg-hitam p-1">
                                <div className="toggle-circle h-4 w-4 rounded-full bg-oren transition duration-300 ease-in-out"></div>
                              </div>
                            </label>
                            <span className="ml-2">LIGHT</span>
                          </div>
                        </li>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>
      </nav>
      <div className="border-t-4 sm:border-t-8 border-abu mx-6 opacity-0 fade-in"></div>
    </div>
  );
}
