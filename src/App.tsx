import React from 'react';
import './App.scss';
import { Hotels } from './components/Hotels/Hotels';
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <div className="container">
          <Hotels />
        </div>
      </div>
    </CookiesProvider>

  );
}

export default App;
