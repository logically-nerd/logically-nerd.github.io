"use client";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cardImg } from "@/data/card-img";
import { getDescription, getTechStack } from "./Functions";

export function WorkCard(
    {
        title, description, tech, codeURL, url
    }: {
        title: string;
        description: string[];
        tech: string[];
        codeURL?: string;
        url?: string
    }
) {

    return (
        <div className="max-w-xs w-full sm:w-[20rem] group/card">
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-cover"
                )}
                style={{ backgroundImage: `url(${cardImg[Math.floor(Math.random() * cardImg.length)]})` }}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="text content h-full flex flex-col justify-end group-hover/card:justify-start">
                    <div className="w-full flex z-10">
                        <h1 className="font-bold w-[70%] text-xl md:text-2xl text-gray-50 relative">
                            {title}
                        </h1>
                        <div className="w-[30%] flex justify-around items-center ">
                            {codeURL && <FaGithub className="h-6 w-6" />}
                            {url && <MdOutlineArrowOutward className="h-6 w-6" />}
                        </div>
                    </div>
                    {getDescription(description, "hidden group-hover/card:block z-10 mr-5 mt-3 overflow-x-hidden overflow-y-clip text-sm")}
                </div>
                <div className="flex">
                    {getTechStack(tech, "relative z-10 mt-4 text-xs")}
                </div>
            </div>
        </div>
    );
}
