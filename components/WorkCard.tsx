"use client";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cardImg } from "@/data/card-img";
import { getDescription, getTechStack } from "./Functions";
import Image from "next/image";

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
                className="cursor-default overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto flex flex-col justify-between p-4"
            // style={{ backgroundImage: `url(${cardImg[Math.floor(Math.random() * cardImg.length)]})` }}
            >
                <Image
                    src={cardImg[Math.floor(Math.random() * cardImg.length)]}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                    priority={false}
                />
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="text content h-full flex flex-col justify-end group-hover/card:justify-start">
                    <div className="w-full flex z-10">
                        <h1 className="font-bold w-[70%] text-xl md:text-2xl text-gray-50 relative">
                            {title}
                        </h1>
                        <div className="w-[30%] justify-around items-center hidden group-hover/card:flex">
                            {codeURL && (
                                <a
                                    href={codeURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-50 hover:text-gray-300 transition-colors"
                                >
                                    <FaGithub className="h-6 w-6 cursor-pointer" title="Github" />
                                </a>
                            )}
                            {url && (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-50 hover:text-gray-300 transition-colors"
                                >
                                    <MdOutlineArrowOutward className="h-6 w-6 cursor-pointer" title="View" />
                                </a>
                            )}
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
