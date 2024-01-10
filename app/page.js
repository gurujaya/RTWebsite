'use client'
import Image from 'next/image'
import logo from '../public/Rooted.png'
import { motion } from 'framer-motion'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className='w-full h-full inline-block z-0 bg-light p-32 pt-0 dark:bg-primaryDark transition-colors'>
        <div className='flex items-center justify-between w-full '>
          <div className='w-1/3'>
            <Image src={logo} alt="Rooted" className='w-full h-auto' />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text="Rooted Together" className=' !text-left'/>
            <p className='text-primary my-4 text-base font-medium dark:text-light'>Rooted Together is a non-profit organization fiscally sponsored by The Hack Foundation that educates, advocates for, and incorporates urban farming into ordinary people's lives. Many people don’t know the importance of farming and agriculture, so we want to encourage people to pick up urban farming due to the massive benefits. Here at Rooted Together, we use the skills that we learned at school, like engineering and science, to incorporate into making urban farming more self-sustainable and efficient. Our approach makes urban farming less time-consuming, labor-intensive, and environmentally friendly</p>
            <div className='flex items-center self-start mt-2'>
              <Link href="https://hcb.hackclub.com/donations/start/rootedtogether" className="flex items-center bg-primary dark:bg-light text-light dark:text-primaryDark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary border-2 border-solid border-transparent hover:border-primary" target={"_blank"}>Support us</Link>
              <Link href="mailto:contact.rootedtogether@gmail.com" className='flex items-center ml-4 p-2.5 px-6 rounded-lg text-lg font-semibold  text-dark border-2 border-solid  border-dark hover:text-light hover:bg-dark' >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}