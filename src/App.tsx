import React from 'react';
// import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Home } from './views/home/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          首页内容
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
      <Home></Home>
    </div>
  );
}

export default App;
