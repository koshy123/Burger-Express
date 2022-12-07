
import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom/'
import { useState } from 'react';
import axios from 'axios';

import './App.css';

import Welcome from './components/Welcome.js';
import Burger from './components/BurgerView.js';
import EachBurger from './components/EachBurger.js';
import Customizer from './components/Customizer';
import Update from './components/Update';



function App() {

  const [loading, setLoading] = useState(false)
  const [burgers, setBurgers] = useState([])
 

  const getBurgers = {
    method: 'GET',
    url: 'https://burger-express.fly.dev/api/burgers',
   
  };

  useEffect(() => {
  axios.request(getBurgers).then(function (response) {
    setBurgers(response.data);
    setLoading(true);

  }).catch(function (error) {
    console.error(error);
  })
  }, [])
  return (

    <BrowserRouter>
      <div className="App">
        <div className="welcome">
          <h1> Burger Express!</h1>
          <Welcome />
          <Customizer/>
        </div>
        <Routes>
          <Route path="/burgerview" element={<Burger burgers={burgers} setBurgers={setBurgers} loading={loading}/>} /> 
          <Route path="/burgerview/:id" element={<EachBurger burgers={burgers}  />} />
          <Route path="/customizer" element={<Customizer/>}/>
          <Route path="/update/:id" element={<Update/>}/> 

        </Routes>  

      </div>

     </BrowserRouter>



  );
}

export default App;