import React, {useContext} from 'react'

import Image from '../components/Image.jsx'
import {Context} from '../Context.jsx'
import {getClass} from '../utils'

export default function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, idx) => (
        <Image key={img.id} img={img} className={getClass(idx)} />
    ))

    return (
        <main className='photos'>
            {imageElements}
        </main>
    )
}