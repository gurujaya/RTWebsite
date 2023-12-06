'use client'
import React from "react";
import Link from "next/link";
import {motion} from "framer-motion"

const MotionLink = motion(Link);
const Logo = () => {
    return(
        <div className="flex items-center justify-center mt-2">
            <MotionLink 
            className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold" 
            href="/"
            whileHover={{ backgroundColor:["#457d58", "#d0db97","#bbd391","#69b578","#3a7d44","#367340","#3a7d44","#69b578","#bbd391","#d0db97","#457d58", ], transition:{duration:2, repeat:Infinity}}}
            >RT</MotionLink>
        </div>
    )
}

export default Logo