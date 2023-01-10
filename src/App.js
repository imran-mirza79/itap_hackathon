import React from'react';
import {Routes ,Route} from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
import './App.css';
import   {data }from './components/data'
import { Navigate } from 'react-router-dom';

import Landingpage from './components/Landingpage/Landingpage'
import Stock from './components/Stock/Stock'
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/stock' element={<Stock/>}/>
          <Route path='/landingpage' element={<Landingpage data={data}/>}/>
          <Route path='/' element={<Navigate to='landingpage'/>}/>
          
          
      </Routes>
      
 
    </div>
  );
}

export default App;
