//import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Country from './components/Country';
import { Routes,Route } from 'react-router-dom';

// import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes >
          <Route  path="/" element={<Countries/>}/>  
          <Route  path=":cname" element={<Country />} />
      </Routes>
    </div>
  )
}


export default App;


