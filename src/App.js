import React from 'react';
import Barrage from './components/barrage/barrage.jsx'
import './App.css';

function App() {
  const width = window.innerWidth
  const height = width * 0.618 // 因为0.618比例比较美啊

  return (
    <div className="App">
      <Barrage width={width} height={height}></Barrage>
    </div>
  );
}

export default App;
