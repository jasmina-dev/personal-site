import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="relative isolate overflow-hidden py-20 sm:py-20"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-pink-900 sm:text-6xl">
            about
          </h2>
          <Link to="/" className="text-pink-900 text-4xl">
            {" "}
            ←{" "}
          </Link>

          <p className="mt-6 text-lg leading-8 text-pink-800">
            hello! 👋 here are a couple things i would love to chat about:
          </p>
          <ul className="list-disc m-6 text-pink-800">
            <li>cooking</li>
            <li>driving</li>
            <li>poker</li>
            <li>rally car racing</li>
            <li>your thoughts on the porsche 718 and the 996.</li>
          </ul>
          <p className="mt-6 text-lg leading-8 text-pink-800">my favs: 🏆</p>
          <ul className="list-disc m-6 text-pink-800">
            <li>porsche 964 carrera rs (porsches in general) and the spyder</li>
            <li>michèle mouton</li>
            <li>arctic monkeys</li>
            <li>frolicking in a meadow</li>
          </ul>
        </div>
      </div>

      <Nav />

      <div className="relative isolate overflow-hidden py-6 sm:py-6"></div>
    </>
  );
}
