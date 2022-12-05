
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom/'
// import "bootswatch/dist/superhero/bootstrap.min.css";
import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome.js';
import Burger from './components/BurgerView.js';
import EachBurger from './components/EachBurger.js';



function App() {
  // const [loading, setLoading] = useState(false)
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

    // <BrowserRouter>
      <div className="App">
        <div className="welcome">
          <h1> are we working here?</h1>
          <Welcome />
        </div>
        <Routes>
          <Route path="burgerview" element={<Burger />} />
          <Route path="*" element ={<App/>}/>
          <Route path="/burgerview/:burger" element={<EachBurger burgers={burgers}  />} />
        </Routes>

      </div>
    // </BrowserRouter>


  );
}

export default App;