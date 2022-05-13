import React from 'react'
import background from '@/assets/background.png'
import Image from 'next/image'
import gradient from '@/assets/gradient.svg'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Helper/Footer'

export const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto md:h-[90rem] md:w-[90rem]">
        <div className="flex justify-between">
          <div className="relative md:my-[14rem]">
            <div className="relative max-w-md">
              <h1 className="text-5xl font-bold text-white "> 
                Make beautiful websites regardless of your design experience.
              </h1>
              <p className="py-4 text-2xl text-white">
                Make beautiful websites regardless of your design experience.
              </p>
              <button className="rounded-3xl bg-indigo-600 px-4 py-2 text-xl text-white transition-all hover:bg-indigo-500">
                Get Started
              </button>
            </div>
            <img
              className="-my-[48rem] w-[1371px]"
              style={{ zIndex: '-1', transform: 'translate(10%, 5%)' }}
              src="https://cdn.discordapp.com/attachments/951169614212104222/973858620477431848/unknown.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
