'use client'
import { motion } from 'framer-motion'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Link from 'next/link'

const Navbar = ({ handleDark, showNav, setShowNav }) => {
  // const [showNav, setShowNav] = useState(false)
  return (
    <div className='w-full'>
      <div className=' w-[90%] flex justify-between m-auto py-8 mb-3'>
        <motion.div
          initial={{ x: '-100vw' }}
          transition={{ delay: 1, duration: 1 }}
          animate={{ x: 0 }}
          className='hidden md:block'
        >
          <div className='flex items-center border-l-2 border-b-2 border-t-2 border-amber-500 pl-2 w-[200px] justify-around rounded'>
            <motion.p
              initial={{ x: '-100vw', rotate: -90 }}
              transition={{ duration: 2, delay: 0.5 }}
              animate={{ x: 0, rotate: 0 }}
            >
              Jesse Giammattolo
            </motion.p>
            <div>
              <BsFillMoonStarsFill
                className='hidden sm:block  ml-8 cursor-pointer'
                onClick={() => handleDark()}
              />
            </div>
          </div>
        </motion.div>
        <div>
          <BsFillMoonStarsFill
            className=' sm:hidden cursor-pointer'
            onClick={() => handleDark()}
          />
        </div>
        <motion.div
          initial={{ x: '100vw' }}
          transition={{ delay: 1, duration: 1 }}
          animate={{ x: 0 }}
          className='hidden md:block'
        >
          <div className=' border-r-2 border-b-2 border-t-2 border-amber-500 pr-2 pl-8 rounded'>
            <ul className='flex'>
              <a
                href={'/#about'}
                className='mr-3'
              >
                <motion.li
                  initial={{ x: '100vw', rotate: 90 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  animate={{ x: 0, rotate: 0 }}
                >
                  About
                </motion.li>
              </a>
              <a
                href={'/#projects'}
                className='mr-3'
              >
                <motion.li
                  initial={{ x: '100vw', rotate: 90 }}
                  transition={{ duration: 2, delay: 0.7 }}
                  animate={{ x: 0, rotate: 0 }}
                >
                  Projects
                </motion.li>
              </a>
              <a
                href={'/#contact'}
                className='mr-3'
              >
                <motion.li
                  initial={{ x: '100vw', rotate: 90 }}
                  transition={{ duration: 2, delay: 0.9 }}
                  animate={{ x: 0, rotate: 0 }}
                >
                  Contact
                </motion.li>
              </a>
            </ul>
          </div>
        </motion.div>
        {/*  */}
        <section className='MOBILE-MENU flex md:hidden'>
          <div
            onClick={() => setShowNav((prev) => !prev)}
            className='HAMBURGER-ICON space-y-2'
          >
            <span className='block h-0.5 w-8 animate-pulse bg-blue-400'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-blue-400'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-blue-400'></span>
          </div>

          <div className={showNav ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              onClick={() => setShowNav(false)}
              className='absolute top-0 right-0 px-8 py-8'
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line
                  x1='18'
                  y1='6'
                  x2='6'
                  y2='18'
                />
                <line
                  x1='6'
                  y1='6'
                  x2='18'
                  y2='18'
                />
              </svg>
            </div>
            <ul className='NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a
                  href={'/#about'}
                  onClick={() => setShowNav(false)}
                >
                  <p className='text-gray-600'>About</p>
                </a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a
                  href={'/#projects'}
                  onClick={() => setShowNav(false)}
                >
                  <p className='text-gray-600'>Projects</p>
                </a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a
                  href={'/#contact'}
                  onClick={() => setShowNav(false)}
                >
                  <p className='text-gray-600'>Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.95);
        z-index: 50;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  )
}

export default Navbar
