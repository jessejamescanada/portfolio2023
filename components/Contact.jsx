import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Contact = () => {
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
            <form
              action='https://formspree.io/f/xbjkpzyr'
              method='POST'
            >
              <div className='flex flex-col items-center justify-center'>
                <input
                  type='text'
                  placeholder='Subject...'
                  className='p-2  shadow-sm outline-0 border-b-2 border-amber-500 bg-inherit w-full '
                />
              </div>
              <div className='flex justify-between mt-8'>
                <input
                  type='text'
                  placeholder='Name...'
                  className='p-2  shadow-sm outline-0 border-b-2 border-amber-500 bg-inherit w-[45%] '
                />
                <input
                  type='email'
                  placeholder='Email...'
                  className='p-2  shadow-sm outline-0 border-b-2 border-amber-500 bg-inherit w-[45%] '
                />
              </div>
              <div className='w-full mt-10'>
                <textarea
                  placeholder='Message...'
                  className='w-full h-[150px] p-2 rounded  shadow-sm  bg-[#ACC1D3] resize-none placeholder-white'
                ></textarea>
              </div>
              <div className='flex items-end justify-center sm:justify-end'>
                <button className='mt-2 py-3 px-4 bg-amber-500 cursor pointer rounded w-[125px] text-gray-50 active:scale-[.98] font-semibold focus:ring-transparent'>
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
