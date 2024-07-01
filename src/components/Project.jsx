import React from "react";

export default function Project(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <img src={props.img} alt={props.title} className="w-full mb-4" />
      <p className="text-gray-700">{props.desc}</p>
      <p className="text-gray-700">{props.tools}</p>{" "}
      <a className="font-bold" href={props.link} target="_blank">
        Learn more
      </a>
    </div>
  );
}
