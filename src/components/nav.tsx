import { Disclosure, Menu, Transition } from "@headlessui/react";
import { classNames } from "../utils";
import {
  Cog8ToothIcon,
  BoltIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Settings } from "./settings";

const navigation = [
  { name: "Wallet", href: "/wallet", current: true },
  { name: "Decoder", href: "#", current: false },
];

export function Nav() {
  return (
    <Disclosure as="nav" className="gradient-bg">
      {({ open }: any) => (
        <>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BoltIcon className="w-10 h-10 text-yellow-300" />
                </div>
                <h1 className="text-4xl font-bold text-white tracking-tighter italic pl-1">
                  Lightning Tap
                </h1>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:bg-opacity-30 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                        {item.name === "Decoder" && (
                          <span className="ml-2 opacity-50 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Coming Soon!
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Settings dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View settings</span>
                      <Cog8ToothIcon className="w-6 h-6 text-gray-300 hover:text-white" />
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
                    <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Settings />
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 py-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                  {item.name === "Decoder" && (
                    <span className="ml-2 opacity-50 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Coming Soon!
                    </span>
                  )}
                </Disclosure.Button>
              ))}
              <div className="flex items-center gap-4">
                <span className="text-gray-300 opacity-60">Settings</span>
                <div className="bg-gray-400 opacity-60 h-0.5 flex-1 rotate-180 rounded-full"></div>
              </div>
              <Menu>
                <Settings />
              </Menu>
            </div>
          </Disclosure.Panel>
          <div className="colorful-gradient-bg h-0.5 rotate-180 rounded-full"></div>
        </>
      )}
    </Disclosure>
  );
}
