import './Styles/App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchingData } from './actions/actions';
import { ThemeManager } from './context/Context';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.reducers);
  console.log('This data is from app', data);
  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchingData());
  }, [dispatch]);

  return (
    <ThemeManager.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ThemeManager.Provider>
  );
}

export default App;
