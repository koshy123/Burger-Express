import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import "bootswatch/dist/superhero/bootstrap.min.css";
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Welcome from './Components/Welcome.js';
import BurgerView from './Components/BurgerView.js';
import EachBurger from './Components/EachBurger.js';



function App() {
  const [loading, setLoading] = useState(false)
  const [burgers, setBurgers] = useState([])
 
//api call
  // const getBurgers = {
  //   method: 'GET',
  //   url: 'whatever the burger Url is',
  //   headers: {
  //     // 'X-RapidAPI-Key': '2d1bb0d53fmsh47470deb9c91173p143b5bjsn9620ab6bef18',
  //     // 'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
  //   }
  // };

  // axios.request(getBurgers).then(function (response) {
  //   setBurgers(response.data);
  //   setLoading(true);

  // }).catch(function (error) {
  //   console.error(error);
  // })

  return (
    <BrowserRouter>
      <div className="App">
        <div className="welcome">
          <Welcome />
        </div>
        <Routes>
          <Route path="burgerview" element={<BurgerView loading={loading}  />} />
          <Route path="/" />
          <Route path="/burgerview/:burger" element={<EachBurger burgers={burgers}  />} />
        </Routes>

      </div>
    </BrowserRouter>
  );

}

export default App;