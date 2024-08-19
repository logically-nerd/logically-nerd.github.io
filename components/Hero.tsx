import { FaLinkedinIn, FaLocationArrow } from 'react-icons/fa6'
import { BackgroundBeams } from './ui/background-beams'
import MagicButton from './ui/magic-button'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { interests } from '@/data/interests'


const Hero = () => {

  return (
    <div className='pb-20 pt-32'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-28 -left-20 h-[80vh] w-[50vw]' fill='blue' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-10 left-[40%] h-[80vh] w-[50vw]' fill='white' />
        <Spotlight className='top-10 left-[46%] h-[80vh] w-[50vw]' fill='purple' />
      </div>
      <div className='h-screen w-full'>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-s text-center text-blue-100 max-w-80'>
              Welcome to my Website
              <span role="img" aria-label="waving hand">👋</span>
            </h2>
            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='I am Adnan Shahid'
            />
            <TypewriterEffectSmooth words={interests} />
            <div className='flex w-full items-center justify-evenly'>
              <a href="#work" className='md:mt-7'>
                <MagicButton
                  title="My Work"
                  icon={<FaLocationArrow />}
                  position='right'
                />
              </a>
              <a
                href="https://www.linkedin.com/in/logically-nerd/"
                className='lg:-ml-20 md:mt-7'
                target='_blank'
              >
                <div
                  title="LinkedIn"
                  className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 border-2 border-blue-500 hover:bg-blue-500 rounded-lg"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  )
}

export default Hero