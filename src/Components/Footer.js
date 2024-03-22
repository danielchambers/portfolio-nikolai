import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-between">
        <div className="w-full md:w-2/3">
          <a className="flex title-font font-medium items-center md:justify-start justify-center ">
            <span className="text-3xl font-bold">Nikolai Chambers</span>
          </a>
          <p className="mt-2 font-medium text-md ">
            Curate is a creative portfolio for Jekyll by Zerostatic Themes.
          </p>

          <span className="flex justify-start mt-9">
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="flex justify-between space-x-16">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold  text-2xl mb-3">Projects</h2>
            <nav className="list-none mb-10 space-y-1 font-medium">
              <li>
                <a className=" hover:">Project 1</a>
              </li>
              <li>
                <a className=" hover:">Project 2</a>
              </li>
              <li>
                <a className=" hover:">Project 3</a>
              </li>
              <li>
                <a className=" hover:">Project 4</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold  text-2xl mb-3">Company</h2>
            <nav className="list-none mb-10 space-y-1 font-medium">
              <li>
                <a className=" hover:">First Link</a>
              </li>
              <li>
                <a className=" hover:">Second Link</a>
              </li>
              <li>
                <a className=" hover:">Third Link</a>
              </li>
              <li>
                <a className=" hover:">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
