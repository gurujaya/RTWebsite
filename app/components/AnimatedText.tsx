import React from 'react';
import {motion} from 'framer-motion'

const quote = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition:{
            delay:0.5,
        }
    }
}

const AnimatedText = ({text, className=""}) => {
    return(
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 className='inline-block w-full text-dark font-bold capitalize text-8xl !text-6xl !text-left' variants={quote}></motion.h1>
        </div>
    )
}