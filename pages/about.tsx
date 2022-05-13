import { Header } from '@/components/Helper/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { AboutMain } from '@/components/Page/AboutMain'
import { Navbar } from '@/components/Navbar'

const About: NextPage = () => {
  return (
    <div>
      <Header title="Vezalan About" /> 

      <AboutMain />
    </div>
  )
}

export default About
