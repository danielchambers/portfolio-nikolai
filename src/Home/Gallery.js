import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ projects }) => {
  return (
    <section className=" body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <Link to={`/projects/${index}`}>
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-96 md:h-96 w-full object-cover object-center rounded-lg"
                    src={project.image}
                    alt="blog"
                  />
                  <div className="mt-2">
                    <h1 className="title-font text-2xl font-bold  mb-1">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
