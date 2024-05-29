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

  useEffect(() => {
    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');

    if (darkToggle) {
      const toggleDarkMode = () => {
        if (darkToggle.checked) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
      };

      darkToggle.addEventListener('click', toggleDarkMode);

      // Clean up the event listener when the component is unmounted
      return () => {
        darkToggle.removeEventListener('click', toggleDarkMode);
      };
    }
  }, []);

  return (
    <div className="text-6xl text-accent sm:text-7 bg-primary dark:bg-neutral transition-all duration-1000">
      <nav className="druk p-4 h-16">
        <ul className="flex justify-between items-center h-full">
          <li className="flex-grow flex items-center m-3">
          <span className={`hover:text-accent transition-all  duration-200 transform hover:scale-110 ${colorChange.jc ? 'text-secondary' : ''}`}>
              <a href="#">J.C</a>
            </span>
          </li>
          <div className="flex-grow justify-between hidden sm:flex">
          <li className={`hover:text-accent px-3 rounded-md transition-all  transform hover:scale-110 duration-200 ${colorChange.about ? 'text-secondary' : ''}`}>
              <a href="#">ABOUT</a>
            </li>
            <li className={`hover:text-accent px-3 rounded-md transition-all  duration-200 transform hover:scale-110 ${colorChange.blog ? 'text-secondary' : ''}`}>
              <a href="mailto:jovianchandras@gmail.com" target="_blank">EMAIL</a>
            </li>
            <li className={`hover:text-accent px-3 rounded-md transition-all  duration-200 transform hover:scale-110 ${colorChange.contact ? 'text-secondary' : ''}`}>
              <a href="https://www.linkedin.com/in/jovian-chandra-santoso/" target="_blank">LINKEDIN</a>
            </li>
            <li className=" flex items-center mr-6">
              <div className="flex">
                <span className={`mr-2  hidden xl:flex transition-all duration-200 ${colorChange.dark ? 'text-secondary' : ''}`}>DARK</span>
                <input type="checkbox" className="hidden" id="dark-toggle" />
                <label htmlFor="dark-toggle">
                  <div className="flex h-6 w-14 cursor-pointer my-4 items-center rounded-full bg-accent dark:bg-abu-putih transition-all duration-1000 p-1">
                    <div className="toggle-circle h-4 w-4 rounded-full bg-secondary transition duration-300 ease-in-out"></div>
                  </div>
                </label>
                <span className={`ml-2  hidden xl:flex transition-all duration-200 ${colorChange.light ? 'text-secondary' : ''}`}>LIGHT</span>
              </div>
            </li>
          </div>

          <Menu
            as="div"
            className="relative inline-block text-left sm:hidden mr-2"
          >
            <div>
              <Menu.Button className="inline-flex w-full transition-all duration-1000 justify-center gap-x-1.5 rounded-md bg-base-100 dark:bg-neutral px-2 font-semibold text-secondary shadow-xl   hover:bg-base-100">
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
              <Menu.Items className="absolute right-0 z-10 mt-4 w-64 origin-top-right rounded-md bg-base-100 dark:bg-neutral shadow-lg focus:outline-none">
                <div className="py-1">
                  <Menu.Item className="transition-all duration-200 transform hover:scale-110">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-secondary text-primary rounded-md"
                            : "text-secondary",
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
                        href="mailto:jovianchandras@gmail.com"
                        target="_blank"
                        className={classNames(
                          active
                            ? "bg-secondary text-primary rounded-md"
                            : "text-secondary",
                          "block px-4 py-2"
                        )}
                      >
                        EMAIL
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="transition-all duration-200 transform hover:scale-110">
                    {({ active }) => (
                      <a
                        href="https://www.linkedin.com/in/jovian-chandra-santoso/"
                        target="_blank"
                        className={classNames(
                          active
                            ? "bg-secondary text-primary rounded-md"
                            : "text-secondary",
                          "block px-4 py-2"
                        )}
                      >
                        LINKEDIN
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="transition-all duration-200 transform">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "text-secondary rounded-md" : "text-secondary",
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
                              <div className="flex h-6 w-14 cursor-pointer my-4 items-center rounded-full bg-primary dark:bg-abu-putih p-1">
                                <div className="toggle-circle h-4 w-4 rounded-full bg-secondary transition duration-300 ease-in-out"></div>
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
      <div className="border-t-4 sm:border-t-8 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 opacity-0 fade-in"></div>
    </div>
  );
}
