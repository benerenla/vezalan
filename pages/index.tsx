import { Header } from '@/components/Helper/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Main } from '@/components/Page/main'
import { Navbar } from '@/components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Header title="Vezalan Ana Sayfa" /> 

      <Main />
    </div>
  )
}

export default Home
