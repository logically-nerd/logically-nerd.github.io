"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCodeSlash, BsLink45Deg } from "react-icons/bs";
import { LayoutGroup, motion } from "framer-motion";

export default function Projects({ projectData }) {
  const [selectedType, setSelectedType] = useState("All"); // Initialize the selectedType state

  // Get unique project types
  const stack = ["All", ...new Set(projectData.map((obj) => obj.type))];

  // Filter projects based on selectedType
  const filteredProjects = projectData.filter((data) => {
    return selectedType === "All" || data.type === selectedType;
  });

  return (
    <div className="h-80">
      <h1 className="py-1 px-4">Projects</h1>
      <div className="bg-slate-700 p-4 rounded-lg">
        <LayoutGroup>
          <ul className="flex gap-3 sm:gap-6">
            {stack.map((proType) => (
              <li
                key={proType}
                className={`${
                  proType === selectedType
                    ? " text-black"
                    : "hover:bg-slate-300/10  rounded-lg"
                } relative duration-300 hover:cursor-pointer uppercase py-0.5 px-2 rounded-md`}
                onClick={() => setSelectedType(proType)} // Set selectedType when the button is clicked
              >
                <span className="relative z-10">{proType}</span>
                {proType === selectedType ? (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-md"
                    layoutId="sidebar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </LayoutGroup>
        <hr className="my-2 opacity-50" />
        <div className="px-5 py-2 -mx-3 h-[21rem] overflow-y-scroll grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredProjects.map((data, k) => (
            <ProjectCard key={k} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ data }) {
  return (
    <div className="bg-purple-300/50 h-fit rounded-md p-2 group">
      <div className="flex justify-between">
        <div>
          <div className="text-2xl">{data.name}</div>
          <div className="text-xs uppercase">{data.type}</div>
        </div>
        <div className="flex self-center gap-3 text-lg">
          {data.code && (
            <Link target="_blank" title="Code" href={data.code}>
              <BsCodeSlash />
            </Link>
          )}
          {data.url && (
            <Link target="_blank" title="Link" href={data.url}>
              <BsLink45Deg />
            </Link>
          )}
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-wrap gap-x-3 text-sm">
        {data.techStack.map((tech, k) => (
          <span key={k} className="">
            {tech}
          </span>
        ))}
      </div>

      <div className="bg-purple-800/60 p-2 rounded mt-2 text-sm invisible group-hover:visible transition-all ease-in-out h-0 group-hover:h-28 overflow-hidden hover:overflow-y-scroll line-clamp-5 hover:line-clamp-none">
        {data.summary}
      </div>
    </div>
  );
}
