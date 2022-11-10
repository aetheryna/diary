import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { HeaderNavigationAcceptedObject } from '../types/header_navigation_types';

const HeaderNavigation = () => {
  const navigationItems:HeaderNavigationAcceptedObject[] = [
    {
      name: 'Home',
      icon: <AiOutlineHome className='header-navigation__icon header-navigation__icon--home' size={24} />,
      url: '/',
    }
  ]

  return (
    <ul className='header-navigation'>
      {navigationItems.map((item: HeaderNavigationAcceptedObject, index: number) => (
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
