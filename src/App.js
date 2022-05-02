import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './api/api';

function App(props) {
  console.log(props);
  useSelector((state) => console.log(state));
  useEffect(() => {
    console.log('useEffect');
    test();
  }, []);

  const test = () => {
    fetchData()
      .then((res) => res.json())
      .then((data) => data);
  };
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
