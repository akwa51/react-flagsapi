import { useContext } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Country from './components/Country';

import { Routes,Route } from 'react-router-dom';
import { initialContext } from './context/Context';
import CountryBorders from './components/CountryBorders';



function App() {
  const {dark} =useContext(initialContext)
  
  return (
    <div className= {dark?"dark":"light"}>
        <Header />
        <Routes >
          <Route  path="/" element={<Countries/>}/> 
          <Route  path=":cname" element={<Country />}/>
          <Route  path=":cname/:code/*" element={<CountryBorders />} /> 
      </Routes>
    </div>
  )
}


export default App;


