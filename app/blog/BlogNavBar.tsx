import React from "react";
import Link from "next/link";
import {motion} from "framer-motion"
import { useContext, createContext, useState } from "react"

const SidebarContext = createContext(useState)


const BlogNavBar = ({children}) => {
    const [expanded, setExpanded] = useState(true)
    return (
        <div>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
            <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
            </button>
            </div>

            <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>

            <div className="border-t flex p-3">
            <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
            />
            <div
                className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
            >
                <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                </div>
            </div>
            </div>
        </nav>
            
            <div className='flex flex-row space-x-5 items-center justify-center md:justify-start md:px-12 border-b border-zinc-500 w-full'>  </div>

        </div>
    )
}

export default BlogNavBar