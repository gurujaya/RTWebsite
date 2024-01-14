'use client'

import React from "react";
import Link from "next/link";
import List from "../components/icons/List";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";


const BlogNavBar = () => {
    const [open, setOpen] = useState(false); 
    return (
        <div className="fixed top-0 left-0 h-full flex flex-col justify-between bg-gray-800 p-4 mt-20">
            <div>
                <Link href="/">
                    <p className="block py-2 px-4 mb-4 rounded text-white bg-gray-600 hover:bg-gray-700">Home</p>
                </Link>
                <Link href="/about">
                    <p className="block py-2 px-4 mb-4 rounded text-white bg-gray-600 hover:bg-gray-700">About</p>
                </Link>
                {/* Add more links/buttons as needed */}
                </div>
                <div className="mt-auto">
                {/* Additional content at the bottom, if any */}
            </div>
      </div>    

           
    

            
    )
}

export default BlogNavBar