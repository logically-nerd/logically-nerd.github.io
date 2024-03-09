'use client'
import Image from 'next/image'
import aboutData from '@/data/aboutData'
// import introData from '@/data/introData'
import { Comfortaa } from 'next/font/google'
import Link from 'next/link'
import socialData from '@/data/socialData'
import TextSwipe from '@/components/TextSwipe'
import PageWrapper from '@/components/PageWrapper'

const comforta = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500']
})

export default function Home() {
  return (
    <PageWrapper className="flex justify-between px-7 flex-col gap-5 md:flex-row">
      <div>
        <div className={`${comforta.className} text-4xl md:text-6xl leading-relaxed md:leading-loose `}>
          Hi, I am<br />Adnan Shahid
        </div>
        <div className='text-[1.2rem] md:text-3xl sm:tracking-widest flex -space-x-0.5 sm:-space-x-1  sm:flex-row'>
          <span className='w-fit'>I am a</span><TextSwipe/>
        </div>
        <div className='flex justify-between xs:w-1/2 md:w-2/3 text-2xl md:text-3xl mt-4 px-2'>
          {socialData.map((data) => (
            <Link href={data.url} key={data.name} title={data.name} target='_blank' className='hover:text-purple-600 transition ease-in hover:-translate-y-1'>{data.icon}</Link>
          ))}
        </div>
      </div>
      <ul className='md:w-2/5 space-y-2 py-10 md:py-0'>
        {aboutData.map((data, k) => (
          <li key={k} className='flex gap-1'>
            {k < aboutData.length - 1 && <span>-</span>}
            <span>{data}</span>
          </li>
        ))}
      </ul>
    </PageWrapper>
  )
}
