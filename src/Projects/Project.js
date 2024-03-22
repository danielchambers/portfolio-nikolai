import React from "react";
import { useParams } from "react-router-dom";

const Project = ({ project }) => {
  const { projectId } = useParams();
  const { title, subtitle, text, date, client, role, screenshots } =
    project[projectId];

  return (
    <div className="flex space-x-24 py-20">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold mb-12">{title}</h1>

        <div className="space-y-6 mb-12">
          {text.map((paragraph, index) => (
            <p className="text-xl leading-8 text-gray-400" key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="">
          <div className="flex space-x-10">
            <span>Date</span>
            <span>{date}</span>
          </div>
          <div className="flex space-x-8">
            <span>Client</span>
            <span>{client}</span>
          </div>
          <div className="flex space-x-11">
            <span>Role</span>
            <span>{role}</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 space-y-10">
        {screenshots.map((screenshot, index) => (
          <>
            <img key={index} src={screenshot.image} alt="screenshot" />
            <span className="text-sm">{screenshot.caption}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Project;
