'use client'
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import TiktokIcon from "./icons/Tiktok";
import InstagramIcon from "./icons/Instagram";
import YoutubeIcon from "./icons/Youtube";
import LinkedInIcon from "./icons/Linkedin";
import EmailIcon from "./icons/Email";
import {motion} from "framer-motion"


const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className="h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/team" title="Team" className="mx-4" />
                <CustomLink href="/blog" title="Blog" className="ml-4" />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://www.instagram.com/us.rootedtogether/" target="_blank" whileHover={{y:2}} whileTap={{scale:0.9}} className="px-2"><InstagramIcon className="h-auto w-full"/></motion.a>
                <motion.a href="https://www.tiktok.com/@us.rootedtogether" target="_blank" whileHover={{y:2}} whileTap={{scale:0.9}} className="px-2"><TiktokIcon className="h-auto w-full"/></motion.a>
                <motion.a href="/" target="_blank" whileHover={{y:2}} whileTap={{scale:0.9}} className="px-2"><YoutubeIcon className="h-auto w-full"/></motion.a>
                <motion.a href="https://www.linkedin.com/company/rooted-together/" target="_blank" whileHover={{y:2}} whileTap={{scale:0.9}} className="px-2"><LinkedInIcon className="h-auto w-full"/></motion.a>
                <motion.a href="/" target="_blank" whileHover={{y:2}} whileTap={{scale:0.9}} className="px-2"><EmailIcon className="h-auto w-full"/></motion.a>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar