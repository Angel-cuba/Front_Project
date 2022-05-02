import { useContext, useState } from 'react';
import Country from '../components/Country';
import { Input } from '../components/Input';
import { ThemeManager } from '../context/Context';

import '../Styles/App.scss';

const Home = () => {
  const { theme } = useContext(ThemeManager);
  const [value, setValue] = useState('');

  //Redux

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={theme === 'light' ? 'Principal' : 'Principal-Dark'}>
      <Input value={value} onChange={handleValue} />
      <div className="MainContent">
        <Country />
      </div>
    </div>
  );
};

export default Home;
