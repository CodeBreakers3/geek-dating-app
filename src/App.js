import React from 'react';
import Header from './Components/Header'
import './App.css';
import routes from './routes'

function App() {
  return (
    <div className="App">
     <Header />
     {routes}
    </div>
  );
}

export default App;
