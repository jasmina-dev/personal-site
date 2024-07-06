import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="relative isolate overflow-hidden py-6 sm:py-6"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex text-pink-800 mx-auto max-w-2xl lg:mx-0">
          <Link to="/projects" className="hover:font-bold duration-100">
            projects
          </Link>
          <span className="mx-2">|</span>
          <Link to="/about" className="hover:font-bold duration-100">
            about
          </Link>
          <span className="mx-2">|</span>
          <a
            href="https://github.com/jasmina-dev"
            target="_blank"
            className="hover:font-bold duration-100"
          >
            github
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/sevara-frederico/"
            target="_blank"
            className="hover:font-bold duration-100"
          >
            linkedin
          </a>
        </div>
      </div>
    </>
  );
}
