'use client'
import urlFor from '../lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import RichTextComponents from '../components/RichTextComponents'

const ProjectDisplay = ({ allProjects }) => {
  return (
    <div
      id='projects'
      className='w-[90%] flex flex-col m-auto my-10 justify-between'
    >
      <p className='text-center sm:text-left sm:ml-5 italic'>
        * Hover over any project for more information
      </p>
      <div className='w-[100%] flex  items-start'>
        <div className='w-full flex flex-wrap  justify-evenly'>
          {allProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=' relative flex flex-col bg-[#C1DFF5] p-5 m-2 text-center h-[450px] w-full sm:w-[45%] lg:w-[30%] rounded-xl border-r-2 border-b-4 border-amber-500 shadow-md'
            >
              <h1 className='text-lg font-serif font-semibold tracking-wider text-gray-600'>
                {project.title}
              </h1>
              <Link href={project.projectLink}>
                <div className='flex justify-center my-3 h-[150px]'>
                  <Image
                    src={urlFor(project.mainImage.asset).url()}
                    width={300}
                    height={225}
                    alt=''
                    className='object-cover rounded-xl'
                  />
                </div>
              </Link>

              <p className='mb-2 h-[150px] text-ellipsis overflow-hidden text-gray-800 tracking-wider font-semibold mt-2'>
                {project.desc}
              </p>
              <div className='flex text-center w-full justify-center absolute bottom-[2%] left-0'>
                <Link
                  href={project.projectLink}
                  className='p-2 bg-gray-400 rounded text-white font-mono cursor-pointer transition duration-500 ease-in-out hover:bg-gray-100 hover:text-gray-800'
                >
                  <p>View Project</p>
                </Link>
                <Link
                  href={project.gitLink}
                  className='p-2 bg-gray-400 rounded text-white font-mono ml-1 cursor-pointer transition duration-500 ease-in-out hover:bg-gray-100 hover:text-gray-800'
                >
                  <p>View Github</p>
                </Link>
              </div>
              <div>
                <a className='absolute top-0 left-0 text-gray-800 h-[390px] w-full z-10 bg-white text-center flex flex-col items-center justify-start py-10 px-4 opacity-0 rounded-xl hover:opacity-100 bg-opacity-95 duration-300'>
                  <PortableText
                    value={project.body}
                    components={RichTextComponents}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay
