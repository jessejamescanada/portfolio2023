'use client'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Typerwriter = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hi, my name is Jesse',
      '{() => setLovesDogs(true)}',
      '<CheckOutMySkillsBelow />',
    ],

    loop: 1,
    delaySpeed: 2000,
  })
  return (
    <>
      <motion.div
        className='hidden lg:block mb-4 md:mb-[50px] lg:mg-[100px] w-full'
        initial={{ x: '-20vw' }}
        transition={{ delay: 3, duration: 1 }}
        animate={{ x: 0 }}
      >
        <h1 className='text-2xl sm:text-4xl text-gray-400 text-center'>
          <span>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
      </motion.div>
      <motion.div
        className='lg:hidden mb-4 md:mb-[50px] lg:mg-[100px] w-full'
        initial={{ x: 0 }}
        transition={{ delay: 3, duration: 1 }}
        animate={{ x: 0 }}
      >
        <h1 className='text-2xl sm:text-4xl text-gray-400 text-center'>
          <span>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
      </motion.div>
    </>
  )
}

export default Typerwriter
