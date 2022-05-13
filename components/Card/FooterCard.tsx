import React from 'react'
import Link from 'next/link'
export const FooterCard: React.FC<Props.IFooterCardProps> = ({
  title,
  icon,
  desc,
  href,
}) => {
  const Icon = icon.iconType
  return (
    <Link href={href}>
      <div className="mx-3 my-4 h-[7rem] w-11/12 rounded-lg shadow-md shadow-blue-600 transition-all hover:scale-105 hover:cursor-pointer md:w-[20rem]">
        <div className="p-2">
          <div className="flex items-center">
            <Icon className={`${icon.color} h-7 w-7 `} />
            <h1 className="mx-2 text-lg text-white">{title}</h1>
          </div>
          <div className="py-2">
            <p className="text-white">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
