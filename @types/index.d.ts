import { IconType } from 'react-icons'

export {}

declare global {
  interface INavbarItems {
    title: string
    to: string
  }
  interface IContactProps {
    title: string
    icon: IconType
    href: string
  }
  interface IFooterProps {
    title: string
    icon: Iconprops
    desc: string
    href: string
  }
  interface IProjectProps {
    title: string
    desc: string
    image: string
    href: string
  } 
  interface Iconprops {
    iconType: IconType
    color: string
  }
}
