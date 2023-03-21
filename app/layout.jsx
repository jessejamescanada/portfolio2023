'use client'
import { useState } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const handleDark = () => {
    setDarkMode((prev) => !prev)
    console.log(darkMode)
  }
  return (
    <html lang='en'>
      <body
        className={`max-w-6xl m-auto ${
          darkMode ? 'bg-[#5a5a5a] text-gray-100' : 'bg-[#D7EEFE] text-gray-800'
        }  transform transition ease-in duration-500 ${
          showNav ? 'fixed' : 'static'
        } `}
      >
        <Navbar
          handleDark={handleDark}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        {children}
      </body>
    </html>
  )
}
