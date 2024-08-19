"use client"

import { getDescription, getTechStack, getTimeline } from '@/components/Functions'
import { experience } from '@/data/experience'
import React from 'react'
import { motion } from 'framer-motion'

function Experience() {
    return (
        <section className="max-w-7xl min-h-[90vh] pt-5 pb-20" id="experience">
            <h1 className='text-4xl text-center mt-10 mb-14'>Experience</h1>
            <div>
                {experience.slice().reverse().map((exp, index) => (
                    <div key={index} className='mb-8 flex flex-wrap justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className='w-full lg:w-1/4'
                        >
                            <p className='mb-2 pt-1 text-sm text-neutral-400'>{getTimeline(exp.duration)}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="w-full text-lg max-w-xl lg:w-3/4"
                        >
                            <h6 className='mb-2 font-semibold'>
                                {exp.role} -
                                <span className=' text-purple'>
                                    {' ' + exp.company}
                                </span>
                            </h6>
                            {getDescription(exp.description)}
                            {getTechStack(exp.tech)}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience