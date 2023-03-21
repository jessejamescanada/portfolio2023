import Image from 'next/image'
import Link from 'next/link'
import urlFor from '../lib/urlFor'

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className='relative w-full h-96 m-10 mx-auto'>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='blog post image'
            fill
          />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }) => {
      ;<ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
    },
    number: ({ children }) => {
      ;<ol className='mt-lg list-decimal'>{children}</ol>
    },
  },
  block: {
    p: ({ children }) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h1: ({ children }) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-3xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-2xl py-10 font-bold'>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>
    ),
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined

        return (
          <Link
            href={value.href}
            rel={rel}
            className='underline decoration-[#f7ab0a] hover:decoration-black'
          >
            {children}
          </Link>
        )
      },
    },
  },
}

export default RichTextComponents
