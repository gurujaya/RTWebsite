'use client'
import Image from 'next/image'
import logo from '../public/Rooted.png'
import { motion } from 'framer-motion'
import AnimatedText from './components/AnimatedText'
import Link from 'next/Link'


export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className='w-full h-full inline-block z-0 bg-light p-32 pt-0'>
        <div className='flex items-center justify-between w-full '>
          <div className='w-1/3'>
            <Image src={logo} alt="Rooted" className='w-full h-auto' />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text="Rooted Together" className=' !text-left'/>
            <p className='text-primary my-4 text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className='flex items-center self-start mt-2'>
              <Link href="https://hcb.hackclub.com/donations/start/rootedtogether" className="flex items-center bg-primary text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary border-2 border-solid border-transparent hover:border-primary" target={"_blank"}>Support us</Link>
              <Link href="mailto:contact.rootedtogether@gmail.com" className='ml-4 text-lg font-medium capitalize text-primary underline' >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}