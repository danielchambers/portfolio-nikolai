import React from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";

const Home = ({ header1, header2, subtext, projects }) => {
  return (
    <div>
      <Hero header1={header1} header2={header2} subtext={subtext} />
      <Gallery projects={projects} />
    </div>
  );
};

export default Home;
