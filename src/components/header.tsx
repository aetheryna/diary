import Navigation from './navigation';
import { SlNotebook } from 'react-icons/sl';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <SlNotebook className='header__logo' size={40} />
        {/* TODO */}
        {/* Working on the navigational items later */}
        {/* <Navigation /> */}
      </div>
    </header>
  )
}

export default Header
