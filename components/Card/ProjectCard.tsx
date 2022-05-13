import React from 'react'
import Link from 'next/link'
export const ProjectCard: React.FC<Props.IProjectCard> = ({
  title,
  image,
  desc,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="mx-3 my-4 h-[20rem] bg-neutral-800/20 w-11/12 transition-all rounded-b-lg hover:scale-105 hover:cursor-pointer md:w-[30rem]">
        <div>
          <div className="items-center">
            <img src={image} className="w-full h-60 shadow-lg" /> 
          </div>
          <div className="py-2">

            <h1 className="mx-2 text-4xl text-white">{title}</h1>
            <p className="text-gray-600 text-xl px-2">{desc}</p>
            <div className='flex justify-center'>
                <Link href={href}><a className='text-white '>Discord</a></Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
