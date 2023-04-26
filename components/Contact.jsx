'use client'
import { useForm, ValidationError } from '@formspree/react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Contact = () => {
  const [state, handleSubmit] = useForm('xbjkpzyr')
  if (state.succeeded) {
    return (
      <p className='text-center text-amber-500 text-xl font-bold'>
        Thanks for the message!
      </p>
    )
  }
  return (
    <div
      id='contact'
      className='w-full '
    >
      <div className='my-10 mx-auto w-[90%] sm:w-[80%] flex flex-col  '>
        <div className='flex flex-col w-full justify-center'>
          <div className='flex flex-col items-center'>
            <h2 className='font-mono text-2xl '>Contact Me</h2>
            <p className='mt-2'>
              Drop me a message, I&apos;d love to hear from you!
            </p>
            <div className='flex mt-3'>
              <Link href={'https://github.com/jessejamescanada'}>
                <AiFillGithub className='text-4xl text-amber-500' />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/in/jesse-giammattolo-468233184/'
                }
              >
                <AiFillLinkedin className='text-4xl text-amber-500' />
              </Link>
              <Link href={'https://twitter.com/developerjesseg'}>
                <AiOutlineTwitter className='text-4xl text-amber-500' />
              </Link>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center justify-center'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Subject...'
                  className='p-2  shadow-sm outline-0 border-b-2 border-amber-500 bg-inherit w-full '
                />
                <ValidationError
                  prefix='Subject'
                  field='subject'
                  errors={state.errors}
                />
              </div>
              <div className='flex justify-between mt-8'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name...'
                  className='p-2  shadow-sm outline-0 border-b-2 border-amber-500 bg-inherit w-[45%] '
                />
                <ValidationError
                  prefix='Name'
                  field='name'
                  errors={state.errors}
                />
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email...'
                  className='p-2  shadow-sm outline-0 border-b-2 border-amber-500 bg-inherit w-[45%] '
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              <div className='w-full mt-10'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Message...'
                  className='w-full h-[150px] p-2 rounded  shadow-sm  bg-[#ACC1D3] resize-none placeholder-white'
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
              <div className='flex items-end justify-center sm:justify-end'>
                <button
                  type='submit'
                  disabled={state.submitting}
                  className='mt-2 py-3 px-4 bg-amber-500 cursor pointer rounded w-[125px] text-gray-50 active:scale-[.98] font-semibold focus:ring-transparent'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
