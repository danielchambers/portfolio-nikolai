import React from "react";

const Hero = ({ header1, header2, subtext }) => {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="flex flex-col -space-y-12 title-font sm:text-[6em] text-[4em] mb-4 font-bold">
            <span>{header1}</span>
            <span>{header2}</span>
          </h1>
          <p className="mb-8 leading-relaxed text-[2em] font-medium text-gray-500">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
