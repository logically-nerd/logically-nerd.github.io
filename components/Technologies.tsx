import React from 'react'
import IconGrid from './icon-grid'
import { tech } from '@/data/tech'
import { CardSpotlight } from './ui/card-spotlight'

function Technologies() {
    return (
        <CardSpotlight className='rounded-lg p-7 mb-10'>
            <IconGrid icons={tech} iconsPerRow={5} className='' />
        </CardSpotlight>
    )
}

export default Technologies