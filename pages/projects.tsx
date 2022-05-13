import { Header } from '@/components/Helper/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ProjectMain } from '@/components/Page/ProjectMain'
import { Navbar } from '@/components/Navbar'

const Project: NextPage = () => {
  return (
    <div>
      <Header title="Vezalan Ana Sayfa" /> 

      <ProjectMain />
    </div>
  )
}

export default Project;
