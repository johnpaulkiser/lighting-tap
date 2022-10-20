import React from "react";
import { Nav } from "./nav";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-full">
      <div className="gradient-bg pb-32 shadow-md">
        <Nav />
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="inline-flex items-center text-5xl tracking-widest font-light text-white">
              {title}
              <InformationCircleIcon className="w-8 h-8 text-gray-200  opacity-25 hover:opacity-100 cursor-pointer" />
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
