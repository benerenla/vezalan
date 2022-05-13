import React from 'react'
import Tippy from '@tippyjs/react'
import Link from 'next/link'

export const Contact: React.FC<Props.IContactProps> = (
  props: Props.IContactProps
) => {
  const Icon = props.icon

  return (
    <Link href={props.href}>
      <Icon
        className="mx-[5px] h-8 w-8 text-gray-500  opacity-70 transition-all duration-500 hover:cursor-pointer hover:text-gray-400"
        {...props}
      />
    </Link>
  )
}
