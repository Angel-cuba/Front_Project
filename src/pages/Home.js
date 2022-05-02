import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '../components/Input';
import Navbar from '../components/Navbar';
import { ThemeManager } from '../context/Context';

import '../Styles/App.scss';

const Home = () => {
  const { theme } = useContext(ThemeManager);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  //Redux
  const { data } = useSelector((state) => state.reducers);
  console.log('This data is used form home', data);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={theme === 'light' ? 'Principal' : 'Principal-Dark'}>
      <Input value={value} onChange={handleValue} />
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
