"use client"

import Technologies from "./Technologies";
import Stats from "./Stats";
import { useState } from "react";
import { PiConfetti } from "react-icons/pi";
import { IoCopyOutline } from "react-icons/io5";

export function About() {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const email = "adnansh2804@gmail.com"
    navigator.clipboard.writeText(email)
    setCopied(true)
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 max-w-7xl mx-auto w-full -mt-5 pt-5" id="about">
      <div className="h-full w-full py-10 pl-10 pr-3 grid grid-rows-1 lg:grid-rows-[2fr_1fr]">
        <div className="md:text-2xl mb-3">
          <h1 className="text-4xl text-center mb-10 ">About Me</h1>
          <ul className="list-disc space-y-7 mb-7">
            <li>
              I’m enthusiastic about tackling complex problems and finding logical solutions.
            </li>
            <li>
              I have a solid understanding of Data Structures and Algorithms (DSA), enhancing my problem-solving capabilities.
            </li>
            <li>
              I have hands-on experience with Python and am diving into AI and ML, applying practical knowledge to real-world problems.
            </li>
          </ul>
          Let's connect and innovate for the future.
        </div>
        <div
          className="h-full w-full md:flex justify-around items-center"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h1 className="text-sm md:text-xl mb-5">
            Do you want to start a project together?
          </h1>
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]"
            onClick={handleCopy}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {!!!copied && <IoCopyOutline className="mr-2" />}
              {copied ? "Email Copied" : "Copy My Email Address"}
              {copied && <PiConfetti className="ml-2" />}
            </span>
          </button>
        </div>
      </div>
      <div className="h-full">
        <Stats />
        <Technologies />
      </div>
    </section>
  );
}
