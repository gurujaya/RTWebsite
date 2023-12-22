'use client'

import React from "react";
import Link from "next/link";
import List from "../components/icons/List";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";


const BlogNavBar = () => {
    const [open, setOpen] = useState(false); 
    return (
        <div>
            <div className="flex flex-row space-y-5 items-center justify-center md:justify-start md:px-12 border-b border-black w-full">
                       

                

            </div>

            <div>
            <div className="mt-6">
                <Disclosure as="nav">
                    <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-dark-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                    </Disclosure.Button>
                    <div className=" mt-28 p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start item-center">
                        <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                        Virtual Dashboard
                        </h1>
                        <div className=" my-4 border-b border-gray-100 pb-4">
                        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Dashboard
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Profile
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Comments
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Analytics
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Messages
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Integration
                            </h3>
                        </div>
                        </div>
                        {/* setting  */}
                        <div className=" my-4 border-b border-gray-100 pb-4">
                        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">

                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Settings
                            </h3>
                        </div>
                        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            More
                            </h3>
                        </div>
                        </div>
                        {/* logout */}
                        <div className=" my-4">
                        
                        </div>
                    </div>
                    </div>
                </Disclosure>

                <List className="hover:dark:bg-dark ml-64 mt-6  rounded-full-right-3"></List> 
            </div>
        </div>
        </div>

           
    

            
    )
}

export default BlogNavBar