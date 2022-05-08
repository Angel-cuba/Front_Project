import { useContext } from 'react';
import Country from '../components/Country';
import { ThemeManager } from '../context/Context';

import '../Styles/App.scss';

const Home = () => {
  const { theme } = useContext(ThemeManager);

  return (
    <div className={theme === 'light' ? 'Principal' : 'Principal-Dark'}>
      <div className="MainContent">
        <Country />
      </div>
    </div>
  );
};

export default Home;
