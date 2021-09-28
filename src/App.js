import React from 'react';
import './App.css';
import { rotesConfig } from './router/rotesConfig.js';
import { RotesGenerator } from './router/RotesGenerator.js';


function App() {
  return (
      <div className="App">
        <RotesGenerator config={rotesConfig} />
      </div>
  );
}

export default App;
