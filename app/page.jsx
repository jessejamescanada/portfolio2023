import groq from 'groq'
import { client } from '../lib/sanity.client'
import ProjectDisplay from '../components/ProjectDisplay'
import HeroHeader from '../components/HeroHeader'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const projectQuery = groq`
  *[_type == "project"] | order(_updatedAt desc)
`
const iconQuery = groq`
  *[_type == 'icons']{
    "image": image[].asset->url,
    "mainImage": mainImage.asset->url
  }
`
const aboutQuery = groq`
  *[_type == 'aboutMe']
  {
    ...,
    "mainImage": mainImage.asset->url,
    body
    
  }
`

export const metadata = {
  title: 'My Portfolio',
  description:
    'Front End Development portfolio for Jesse Giammattolo. React, Nextjs, Javascript, Tailwind, Sanity.io',
}

const HomePage = async () => {
  const allProjects = await client.fetch(projectQuery)
  const allIcons = await client.fetch(iconQuery)
  const aboutMe = await client.fetch(aboutQuery)

  return (
    <div className='flex flex-col  relative'>
      <HeroHeader allIcons={allIcons} />
      <ProjectDisplay
        allProjects={allProjects}
        id='projects'
      />
      <AboutMe aboutMe={aboutMe} />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
