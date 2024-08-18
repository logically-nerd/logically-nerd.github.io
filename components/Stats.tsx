import React from 'react'
import { CardStack } from './ui/card-stack'
import { getExpCount, getProjectCount } from '@/components/Functions'

function Stats() {

    const experience = [
        {
            id: 0,
            number: getExpCount(),
            content: 'Years Experience',
        },
        {
            id: 1,
            number: getProjectCount(),
            content: 'Projects Completed'
        }
    ]
    return (
        <div className="flex items-center justify-center w-full mb-10">
            <CardStack items={experience} />
        </div>
    )
}

export default Stats