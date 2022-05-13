import React from 'react'
import background from '@/assets/background.png'
import Image from 'next/image'
import gradient from '@/assets/gradient.svg'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Helper/Footer'

export const AboutMain = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto md:h-[55rem] md:w-[90rem]">
        <div className="flex justify-between">
          <div className="relative md:my-[14rem]">
            <div className="relative">
              <h1 className="text-5xl font-bold text-white ">Biz Kimiz?</h1>
              <p className="py-4 text-2xl text-white">
                Vezalan Software 2019 Yılında 2 geliştirici arkadaş tarafından
                kurulmuştur. Şu an ise içlerinde tasarımcılar, pazarlamacılar
                geliştiriciler olan 15 kişi ile yoluna devam etmektedir. Sürekli
                kendilerini geliştirip müşterilerine Aplikasyon
                Geliştiriciliği,Web Site Geliştiriciliği ve Oyun Gelişticiliği
                hizmeti sunan Vezalan Software size yardımcı olmak için var.
                Vezalan Software size hızlı ve güvenilir çözümler sunun bir
                yazılım firmasıdır. Make beautiful websites regardless of your
                design experience.
              </p>
            </div>
            
          </div>
        <div>
            <img className='w-[40rem] my-24 mx-4' src="https://www.vezalansoftware.com/assets/image1.svg" />
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
