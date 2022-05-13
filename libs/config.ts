import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export const CONFIG = {
  default_title: '',
  title: 'Vezalan Software',
  NAVBAR_ITEMS: [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Refernce', to: 'refernce' },
  ] as INavbarItems[],
  CONTACT: [
    { title: 'Github', icon: FaGithub, href: '/github' },
    { title: 'Discord', icon: FaDiscord, href: '/discord' },
    { title: 'Twitter', icon: FaTwitter, href: '/twitter' },
    { title: 'İnstagram', icon: FaInstagram, href: '/instagram' },
  ] as IContactProps[],
  FOOTER_CONTACT: [
    {
      title: 'Twitter',
      icon: { iconType: FaTwitter, color: 'text-blue-600' },
      href: '/twitter',
      desc: 'Twitter hesabımızdan yenilikleri takip edebilirsin.',
    },
    {
      title: 'Discord',
      icon: { iconType: FaDiscord, color: 'text-bgDiscord' },
      href: '/discord',
      desc: 'Discord sunucumuza katılmak istermisin?',
    },
    {
      title: 'Github',
      icon: { iconType: FaGithub, color: 'text-gray-500' },
      href: '/github',
      desc: 'Github hesabımızdan sitelerimizin kaynak kodlarına erişebilirsiniz.',
    },
  ] as IFooterProps[],
}
