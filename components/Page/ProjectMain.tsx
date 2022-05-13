import React from 'react'
import background from '@/assets/background.png'
import Image from 'next/image'
import gradient from '@/assets/gradient.svg'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Helper/Footer'
import { ProjectCard } from '../Card/ProjectCard'

export const ProjectMain = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto md:h-[50rem] md:w-[90rem]">
        <div className="flex ">
        <ProjectCard title="Marge" image="https://cdn.discordapp.com/attachments/951169614212104222/951176024211742780/4e17ad83-59cb-464a-813b-8dfa370165da.jpg" href="/" desc='Deneme' /> 
        </div>
      </div>
      <Footer />
    </div>
  )
}
