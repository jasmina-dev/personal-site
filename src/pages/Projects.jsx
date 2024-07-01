import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Project from "../components/Project";
import projects from "../projects";

export default function Projects() {
  const myProjects = projects.map((project) => {
    return (
      <Project
        key={project.id}
        title={project.title}
        img={project.img}
        desc={project.desc}
        tools={project.tools}
        link={project.link}
      />
    );
  });

  return (
    <>
      <div className="relative isolate overflow-hidden py-20"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-pink-900 sm:text-6xl">
            my projects
          </h2>
          <Link to="/" className="text-pink-900 text-4xl">
            {" "}
            ←{" "}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {myProjects}
        </div>
      </div>

      <Nav />

      <div className="relative isolate overflow-hidden py-6 sm:py-6"></div>
    </>
  );
}
