import React, { useState, useRef } from 'react'
import Card from './Card'
import {motion} from "framer-motion"
function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Yoooooooooooooo",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Yoooooooooooooo",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "Yoooooooooooooo",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagtitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Yoooooooooooooo",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Download Now", tagColor: "sky" },
        },
    ];
    return (
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flexwrap-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} refrence={ref} />
            ))}
        </div>
    )
}

export default Foreground