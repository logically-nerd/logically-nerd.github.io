'use client'

import { useState } from "react";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500']
})

export default function Loader() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    // After 2 seconds, the component will re-render and this text won't be displayed anymore
    setLoading(false);
  }, 1500);

  return (
    <>
      {loading ?
        <div className={`${dosis.className} grid place-items-center bg-[#1d1d1f] z-50 fixed top-0 bottom-0 left-0 right-0 font-bold text-3xl text-[#f5f5f7] tracking-[0.2em] transition-all ease-out`}>
          <p className="motion-safe:animate-pulse">One line of code<br />At a time.</p>
        </div > :
        <> </>
      }
    </>
  )
}
