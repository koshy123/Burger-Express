
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom/'
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Welcome from './components/Welcome.js';
import Burger from './components/BurgerView.js';
import EachBurger from './components/EachBurger.js';



function App() {
  const [loading, setLoading] = useState(false)
  const [burgers, setBurgers] = useState([])
 

  const getBurgers = {
    method: 'GET',
    url: 'http://localhost:4000/api/burgers',
   
  };

  axios.request(getBurgers).then(function (response) {
    setBurgers(response.data);
    setLoading(true);

  }).catch(function (error) {
    console.error(error);
  })

  return (

    <BrowserRouter>
      <div className="App">
        <div className="welcome">
          <h1> are we working here?</h1>
          <Welcome />
        </div>
        <Routes>
          <Route path="/burgerview" element={<Burger burgers={burgers} setBurgers={setBurgers} loading={loading}/>} />
          <Route path="/" />
          <Route path="/burgerview/:burger" element={<EachBurger burgers={burgers}  />} />
        </Routes>

      </div>
     </BrowserRouter>

  );

}

export default App;