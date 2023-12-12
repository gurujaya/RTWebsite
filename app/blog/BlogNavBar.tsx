import React from "react";
import Link from "next/link";
import {motion} from "framer-motion"

const BlogNavBar = () => {
    return (
        <div>
            <div className='flex-col space-y-4 items-center py-8 hidden sm:flex border-r border-zinc-10000 h-full w-[120px] md:w-[250px] md:items-start fixed'>
                <h1 className="indent-10 text-blog text-2xl md:font-bold">Latest Blogs</h1>
            </div>

            <div className='flex flex-row space-x-5 items-center justify-center md:justify-start md:px-12 border-b border-zinc-10000 w-full'>
                

            </div>

        </div>
    )
}

export default BlogNavBar