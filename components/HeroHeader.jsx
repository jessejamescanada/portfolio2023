'use client'
import { motion } from 'framer-motion'
import Typerwriter from './Typerwriter'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import Link from 'next/link'
import IconDisplay from './IconDisplay'

const HeroHeader = ({ allIcons }) => {
  return (
    <div className='relative w-full flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-[85%] h-full  flex items-start justify-center m-auto  z-10'>
        <div className='flex flex-col w-full justify-between h-full items-center'>
          <div className='flex flex-col lg:flex-row w-full  mt-0 sm:mt-[5%] justify-between'>
            <motion.div
              className=' sm:flex flex-col order-2 sm:order-1 sm:flex-row w-full  lg:w-[48%] sm:items-start lg:items-start '
              initial={{ opacity: 0 }}
              transition={{ delay: 3.5, duration: 1.5 }}
              animate={{ opacity: 1 }}
            >
              <div className='mb-5 w-full flex justify-center sm:w-[50%] mr-2'>
                <Image
                  src={urlFor(allIcons[0].mainImage).url()}
                  height={150}
                  width={200}
                  alt='me'
                  className=' rounded-full sm:rounded-xl object-none object-[70%_20%] h-[200px] sm:h-[275px] -rotate-6 border-b-2 border-l-2 border-white '
                />
              </div>
              <div className='text-left w-full  sm:w-[70%] m-0 sm:ml-10 mt-0 lg:mt-8 tracking-wider leading-7'>
                <h2 className='text-xl font-bold mb-2'>Hey There</h2>
                <p>
                  Thank you for taking the time to visit my page. As a full
                  stack developer, I specialize in React, Next JS, Prisma,
                  Sanity.io and Tailwind CSS. Please take a look at my portfolio
                  of projects listed below to gain further insights into my work
                  and credentials.
                </p>
              </div>
            </motion.div>
            <div className='flex w-full flex-col mt-10 w-full order-1 sm:order-2 lg:w-[48%] items-center mt-10'>
              <Typerwriter />
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 3.5, duration: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <a
                  href={'/#projects'}
                  className='hidden sm:block'
                >
                  <button className='py-3 px-5 bg-amber-400 rounded cursor-pointer text-white uppercase tracking-wider font-semibold shadow-md active:scale-[.98]'>
                    Projects
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
          <motion.hr
            initial={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1.5 }}
            animate={{ opacity: 1 }}
            className='border-b-2 border-amber-500 w-[65%] mt-8   mb-4'
          />
        </div>
      </div>
      <IconDisplay allIcons={allIcons} />
    </div>
  )
}

export default HeroHeader
