import Link from 'next/link';
import { ReactElement } from 'react';
import { AiOutlineHome } from 'react-icons/ai';

const HeaderNavigation = () => {
  interface navigation_items_properties {
    name: string,
    icon: ReactElement,
    url: string,
  }

  const navigationItems:navigation_items_properties[] = [
    {
      name: 'Home',
      icon: <AiOutlineHome className='header-navigation__icon header-navigation__icon--home' size={24} />,
      url: '/',
    }
  ]

  return (
    <ul className='header-navigation'>
      {navigationItems.map((item: navigation_items_properties, index: number) => (
        <li className='header-navigation__item' key={index}>
          <Link href={item.url}>
            {item.icon}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default HeaderNavigation;
