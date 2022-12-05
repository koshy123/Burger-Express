
import React from 'react';
import './App.css';


// import { Routes, Route } from 'react-router-dom/'
// // import "bootswatch/dist/superhero/bootstrap.min.css";
// import { useState } from 'react';
// import Welcome from './components/Welcome.js';
// import Burger from './components/BurgerView.js';
// import EachBurger from './components/EachBurger.js';



function App() {
  // const [loading, setLoading] = useState(false)
  // const [burgers, setBurgers] = useState([])
 

  return (

      <div className="App">
        <div className="welcome">
          <h1> Burger Express</h1>
          {/* <Welcome /> */}
        </div>
        {/* <Routes>
          <Route path="burgerview" element={<Burger />} />
          <Route path="*" element ={<App/>}/>
          <Route path="/burgerview/:burger" element={<EachBurger burgers={burgers}  />} />
        </Routes> */}

      </div>
     


  );
}

export default App;