import { IconType } from 'react-icons'

export {}

declare global {
  namespace Props {
    interface IHeaderProps {
      title: string
      meta?: IMetaProps
    }

    interface IMetaProps {
      title?: string
      description?: string
      image?: string
      name: string
    }
    interface IContactProps {
      title: string
      icon: IconType
      href: string
    }
    interface IFooterCardProps {
      title: string
      desc: string
      icon: IConProps
      href: string
    }
    interface IProjectCard {
      title: string
      desc: string
      image: string
      href: string
    }
   
    interface IConProps {
      iconType: IconType
      color: string
    }
  }
}
