import { useContext } from 'react';
import { ThemeManager } from '../context/Context';
import '../Styles/Components/Navbar.scss';
import Car from './Car';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { theme } = useContext(ThemeManager);

  return (
    <div className={theme === 'light' ? 'navbar' : 'navbar-dark'}>
      <div className="navbar-img">
        <img
          src="https://res.cloudinary.com/dqaerysgb/image/upload/v1651333819/Earth-Planet-PNG-Picture_btbdtv.png"
          style={{ width: '10opx', height: '100px' }}
          alt=""
        />
      </div>
      <div className="emptyDiv"></div>
      <div className="navbar-buttons">
        <ThemeToggle />
      </div>
        <Car />
    </div>
  );
};

export default Navbar;
