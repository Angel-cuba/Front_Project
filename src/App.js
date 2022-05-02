import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchingData } from './actions/actions';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.reducers);
  console.log('This data is from app', data);
  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchingData());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
