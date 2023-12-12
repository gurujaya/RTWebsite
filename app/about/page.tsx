'use client'
import Head from 'next/head'
import React, { useRef, useEffect } from 'react'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import HeroImage from '../../public/IMG_4979.jpg';
import { useInView, useMotionValue, useSpring,} from 'framer-motion'



const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000});
const isInView = useInView(ref, {once: true});

useEffect(() => {
  if (isInView) {
    motionValue.set(value)
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest. toFixed(0);
    }
  })
},[springValue, value])

  return <span ref={ref} ></span>
}



const page = () => {
  return (
    <>
      <Head>
        <title>Rooted Together | About Page</title>
        <meta name='description'></meta>
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='w-full h-full inline-block z-0 bg-light p-32 pt-16'>
          <AnimatedText text='"Sowing Seeds for a Brighter Future"' className='mb-16'></AnimatedText>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Us</h2>
              <p className='font-medium'>
                Lorem ipsum dolor sit amet. Qui omnis rerum et modi officia sed soluta repudiandae. Qui tempore libero quo vero voluptatum qui numquam perferendis id sapiente molestiae eum officiis galisum vel quidem neque ut sequi dolorum.
              </p>
              <p className='my-4 font-medium'>
                Est quaerat quos ut omnis nemo rem odio libero vel sunt ratione non voluptates sunt ut iure voluptas. Et expedita delectus qui labore ratione in autem autem id accusamus veritatis quo voluptatem amet non facere perferendis.
              </p>
              <p className='font-medium'>
                A vitae eveniet qui nulla iusto sed culpa aliquam aut galisum voluptatem non pariatur dolore sit perspiciatis repudiandae qui iusto culpa. Sit tempora velit est modi unde nam sunt molestiae? Et quod galisum aut corporis internos et delectus aspernatur. Ut blanditiis debitis ex dicta quibusdam a voluptas ipsam est officia voluptas!
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark'/>
              <Image src={HeroImage} alt="people" className='w-full h-auto rounded-2xl' ></Image>
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={6}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-primary/75'>Schools</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={30}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-primary/75'>Rooted Together Kits</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={90}/>+ 
                </span>
                <h2 className='text-xl font-medium capitalize text-primary/75'>Members</h2>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default page