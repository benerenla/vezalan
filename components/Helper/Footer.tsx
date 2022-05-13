import { CONFIG } from '@/libs/config'
import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { FooterCard } from '../Card/FooterCard'

export const Footer = () => {
  return (
    <footer>
      <div className="flex  flex-col justify-center md:flex-row">
        {CONFIG.FOOTER_CONTACT.map((data: IFooterProps, index: number) => (
          <FooterCard
            key={index}
            title={data.title}
            desc={data.desc}
            icon={data.icon}
            href={data.href}
          />
        ))}
      </div>
      <div className="my-6">
        <h2 className=" text-center text-lg text-white">
          Created By{' '}
          <a
            className="text-indigo-600 transition-all hover:text-indigo-500"
            href="/"
          >
            Atlas
          </a>{' '}
          with{' '}
          <a
            href="/"
            className="text-red-600 transition-all hover:text-red-500"
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            href="/"
            className="text-blue-600 transition-all hover:text-blue-500"
          >
            Tailwind CSS
          </a>
        </h2>
      </div>
    </footer>
  )
}
