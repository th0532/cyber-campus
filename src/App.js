import React from 'react';
import './App.css';
import Top from './component/top';
import Sidebar from './component/sidebar';
import Content from './component/content';

function App() {
  return (
    <div className="App">
        <Top/>
        <div className="container">
          <Sidebar/>
          <Content/>
        </div>
    </div>
  );
}

export default App;
