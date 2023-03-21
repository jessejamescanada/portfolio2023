'use client'
import urlFor from '../lib/urlFor'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import RichTextComponents from '../components/RichTextComponents'

const AboutMe = ({ aboutMe }) => {
  return (
    <div
      id='about'
      className='w-[90%] flex m-auto my-10 '
    >
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <div className='w-full sm:w-[30%] '>
          <Image
            src={urlFor(aboutMe[0].mainImage).url()}
            width={350}
            height={350}
            alt='me'
            className='h-[300px] object-cover rounded-xl sm:rounded-full mb-5 sm:mb-0 shadow-xl border-b-8 border-l-8 border-amber-500'
          />
        </div>
        <div className='w-full sm:w-[60%] flex flex-col'>
          <div className='flex justify-end'>
            <hr className='hidden sm:block border-b-2 border-amber-500 w-[85%]   mb-4'></hr>
          </div>

          <div className='w-full'>
            <PortableText
              value={aboutMe[0].body}
              components={RichTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
