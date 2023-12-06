'use client'
import Image from 'next/image'
import logo from '../public/Rooted.png'
import { motion } from 'framer-motion'
import AnimatedTitle from './components/AnimatedTitle'


export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className='w-full h-full inline-block z-0 bg-light p-32 pt-0'>
        <div className='flex items-center justify-between w-full '>
          <div className='w-1/3'>
            <Image src={logo} alt="Rooted" className='w-full h-auto' />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
              <AnimatedTitle className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden"/>
            </div>
            <p>At Rooted Together, we are passionate about urban agriculture and its potential to transform communities. Join us in our mission to create sustainable, thriving cities through the power of urban farming.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
