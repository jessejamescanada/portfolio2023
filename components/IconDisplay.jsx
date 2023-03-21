import Image from 'next/image'
import urlFor from '../lib/urlFor'
import { motion } from 'framer-motion'

const IconDisplay = ({ allIcons }) => {
  const { image } = allIcons[0]
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 3.5, duration: 1.5 }}
        animate={{ opacity: 1 }}
        className='hidden sm:flex w-full sm:w-[50%] flex-wrap items-center justify-center mb-10'
      >
        {image.map((item) => (
          <div
            className='m-2'
            key={item}
          >
            <Image
              src={urlFor(item).url()}
              width={60}
              height={60}
              alt=''
              className='w-auto'
            />
          </div>
        ))}
      </motion.div>
      <div className='sm:hidden flex w-full sm:w-[50%] flex-wrap items-center justify-center mb-10'>
        {image.map((item) => (
          <div
            className='m-2'
            key={item}
          >
            <Image
              src={urlFor(item).url()}
              width={60}
              height={60}
              alt=''
              className='w-auto'
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default IconDisplay
