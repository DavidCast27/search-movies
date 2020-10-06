import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import './App.css';
import 'bulma/css/bulma.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
