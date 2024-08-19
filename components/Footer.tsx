import React from 'react'
import MagicButton from './ui/magic-button'
import { FaArrowUp, FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/components/socials'
import { motion } from 'framer-motion';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:text-3xl mb-8">
                    Would love to hear about your ideas and projects.
                </h1>
                <a href="mailto:adnansh2804@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base mb-10 md:mb-0 text-sm md:font-normal font-light">
                    Copyright © 2024 Adnan Shahid
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((social) => (
                        <a href={social.url} key={social.id} target='_blank'>
                            <div
                                title={social.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <motion.div className='mt-7 mx-auto max-w-fit text-sm text-purple text-center opacity-65 hover:cursor-pointer' onClick={scrollToTop}>
                Back to Top <FaArrowUp className='inline ml-1' />
            </motion.div>
        </footer>
    )
}

export default Footer