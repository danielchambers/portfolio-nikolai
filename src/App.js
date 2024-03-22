import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Home/Home";
import Footer from "./Components/Footer";
import Projects from "./Projects/Projects";
import Project from "./Projects/Project";

function App() {
  const backgroundColor = "#0b0326"; // ff5733
  const logoText = "NC";
  const headerText1 = "Curate is a premium";
  const headerText2 = "portfolio for Jekyll.";
  const subtext = "Showcase your projects, work or case studies in style with this markdown powered portfolio theme for Jekyll.";
  const projects = [
    {
      image:
        "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-1-1-thumbnail.webp",
      title: "Brutalist Office Building",
      subtitle: "Dubai Star",
      text: [
        "The Dubai Star is a 1,804 foot tall (550m) skyscraper project in Dubai. The tower will have 114 floors and will be located in the Dubai Marina area. The building will be a mixed-use building, consisting of residential, commercial, office, and retail spaces. The building will also have a 6-story underground parking garage.",
        "The building is designed by the same architects who designed the Burj Khalifa, Adrian Smith and Gordon Gill. The building will have a unique design, with a twisting shape and a glass facade. The",
        "The building will be a mixed-use building, consisting of residential, commercial, office, and retail spaces. The building will also have a 6-story underground parking garage. The building is designed by the same architects who designed the Burj Khalifa, Adrian Smith and Gordon Gill. The building will have a unique design, with a twisting shape and a glass facade. The"
      ],
      date: "Novermber, 21 2021",
      client: "Dubai Star",
      role: "Architect",
      screenshots: [
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-1-1.webp", caption: "Caption text 1"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-1-2.webp", caption: "Caption text 2"},
      ]
    },
    {
      image:
        "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-1-thumbnail.webp",
      title: "Water Works Revitalisation",
      subtitle: "Brisbane City Council",
      text: [
        "The Water Works Revitalisation project is a major infrastructure project in Brisbane, Australia. The project aims to revitalize the city's water infrastructure, including the construction of new water treatment plants, the replacement of aging water pipes, and the construction of new water storage facilities. The project is expected to take several years to complete and will involve a significant investment of public funds.",
        "The project is being carried out by the Brisbane City Council, which is responsible for the city's water infrastructure. The project is part of the council's long-term plan to improve the city's water supply and ensure that it can meet the needs of a growing population. The project is also expected to create jobs and stimulate economic growth in the region.",
        "The project is being carried out by the Brisbane City Council, which is responsible for the city's water infrastructure. The project is part of the council's long-term plan to improve the city's water supply and ensure that it can meet the needs of a growing population. The project is also expected to create jobs and stimulate economic growth in the region.",
        "The project is being carried out by the Brisbane City Council, which is responsible for the city's water infrastructure. The project is part of the council's long-term plan to improve the city's water supply and ensure that it can meet the needs of a growing population. The project is also expected to create jobs and stimulate economic growth in the region.",
      ],
      date: "January, 12 2020",
      client: "Brisbane City Council",
      role: "Engineer",
      screenshots: [
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-1.webp", caption: "Caption text 1"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-2.webp", caption: "Caption text 2"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-3.webp", caption: "Caption text 3"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-4.webp", caption: "Caption text 4"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-5.webp", caption: "Caption text 5"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-2-6.webp", caption: "Caption text 6"}
      ]
    },
    {
      image:
        "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-3-1-thumbnail.webp",
      title: "Cubist Urban Home",
      subtitle: "Region of Valencia",
      text: [
        "The Cubist Urban Home is a residential project in the Region of Valencia, Spain. The project is a collaboration between the regional government and a private developer, and aims to create a new model for urban living in the region. The project will consist of a series of modern, cubist-style homes, designed to be energy-efficient and environmentally friendly.",
        "The homes will be built using sustainable materials and will be equipped with the latest smart home technology. The project is part of the regional government's efforts to promote sustainable development and reduce the region's carbon footprint. The project is also expected to create jobs and stimulate economic growth in the region.",
        "The homes will be built using sustainable materials and will be equipped with the latest smart home technology. The project is part of the regional government's efforts to promote sustainable development and reduce the region's carbon footprint. The project is also expected to create jobs and stimulate economic growth in the region.",
      ],
      date: "March, 10 2019",
      client: "Region of Valencia",
      role: "Designer",
      screenshots: [
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-3-1.webp", caption: "Caption text 1"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-3-2.webp", caption: "Caption text 2"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-3-3.webp", caption: "Caption text 3"},
      ]
    },
    {
      image:
        "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-4-1-thumbnail.webp",
      title: "Subway",
      subtitle: "RGA Agency",
      text: [
        "The Subway project is a major infrastructure project in New York City. The project aims to revitalize the city's subway system, which has been plagued by delays, breakdowns, and overcrowding in recent years. The project will involve the construction of new subway lines, the renovation of existing stations, and the installation of new signaling and communications systems.",
        "The project is being carried out by the New York City Transit Authority, which is responsible for the city's subway system. The project is part of the authority's long-term plan to improve the city's public transportation infrastructure and ensure that it can meet the needs of a growing population. The project is also expected to create jobs and stimulate economic growth in the region.",
        "The project is being carried out by the New York City Transit Authority, which is responsible for the city's subway system. The project is part of the authority's long-term plan to improve the city's public transportation infrastructure and ensure that it can meet the needs of a growing population. The project is also expected to create jobs and stimulate economic growth in the region.",
      ],
      date: "May, 18 2018",
      client: "RGA Agency",
      role: "Designer",
      screenshots: [
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-4-1.webp", caption: "Caption text 1"},
        {image: "https://jekyll-curate.netlify.app/assets/images/gen/projects/project-4-2.webp", caption: "Caption text 2"},

      ]
    },
  ];

  return (
    <div className="px-[14em] text-white" style={{backgroundColor: backgroundColor}}>
      <Header logoText={logoText} />
      <Routes>
        <Route
          index
          element={
            <Home
              header1={headerText1}
              header2={headerText2}
              subtext={subtext}
              projects={projects}
            />
          }
        />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/projects/:projectId" element={<Project project={projects} />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
