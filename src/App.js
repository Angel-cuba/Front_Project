import './Styles/App.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchingData } from './actions/actions';
import { ThemeManager } from './context/Context';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  return (
    <ThemeManager.Provider value={{ theme, setTheme }}>
      <div className={theme === 'light' ? 'App-light' : 'App-dark'}>
        <Navbar />
        <Home />
      </div>
    </ThemeManager.Provider>
  );
}

export default App;
