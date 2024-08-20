"use client"

import React, { useState } from 'react'
import { WorkCard } from './WorkCard'
import { work } from '@/data/work'
import { Carousel } from './ui/apple-cards-carousel'
import { motion } from "framer-motion";
import { filterData, getUniqueTypes } from './Functions'

function Projects() {

    const [data, setData] = useState(work);
    const [filter, setFilter] = useState('ALL');
    const applyFilter = (type: string) => {
        setFilter(type)
        if (type === "ALL") {
            setData(work)
        } else {
            setData(filterData(work, type))
        }
    }

    const fadeInAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.05 * index }
        }),
    }

    return (
        <section className="max-w-7xl min-h-[90vh] pt-3 pb-24" id="work">
            <h1 className='text-4xl text-center mt-10 mb-5'>Work</h1>
            <motion.ul
                variants={fadeInAnimation}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='flex gap-7 pl-10 text-lg'
            >
                <li
                    onClick={() => applyFilter("ALL")}
                    className={`hover:cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 ${filter === "ALL" ? 'underline underline-offset-4' : ''}`}
                >
                    ALL
                </li>
                {getUniqueTypes(work).map((type) => (
                    <li
                        key={type}
                        onClick={() => applyFilter(type)}
                        className={`hover:cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 ${filter === type ? 'underline underline-offset-4' : ''}`}
                    >
                        {type}
                    </li>
                ))}
            </motion.ul>
            <Carousel items={data.map((project, index) => (
                <WorkCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    url={project.url}
                    codeURL={project.codeURL}
                />
            ))} />
        </section>
    )
}

export default Projects