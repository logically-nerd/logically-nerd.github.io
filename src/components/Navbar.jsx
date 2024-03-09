"use client";

import navData from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Comfortaa } from "next/font/google";

const comforta = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full bg-gray-900/70 backdrop-blur-md z-40">
      <ul
        className={`${comforta.className} flex gap-7 md:gap-11 justify-center p-5 text-xl`}
      >
        {navData.map((data) => (
          <li key={data.name} className={`font-medium flex relative group`}>
            <Link href={data.url}>
              {pathname === data.url ? (
                <span className="border -2 h-12 px-5 rounded-lg border-purple-600 bg-slate-700  flex items-center">
                  {data.name}
                </span>
              ) : (
                <>
                  <span className="border-2 h-12 w-12 rounded-full border-purple-800 grid place-items-center hover:border-purple-600">
                    {data.img}
                  </span>
                  <small className="absolute -top-10 invisible group-hover:visible bg-purple-600/70 text-slate-200 rounded-sm px-2 py-1 text-sm">
                    {data.name}
                  </small>
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
