import React from "react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden py-24 sm:py-24"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-pink-900 sm:text-6xl">
            hi, i'm jasmina
          </h2>
          <p className="mt-6 text-lg leading-8 text-pink-800">
            i'm a cs major @ lafayette who likes to cook and drive! check out
            these cool links
          </p>
        </div>
      </div>

      <Nav />
    </>
  );
}
