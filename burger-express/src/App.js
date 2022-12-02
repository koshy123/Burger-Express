import './App.css';
import { Routes, Route , Link } from "react-router-dom"
import Burgers from './burgers/burgers.js';
import {React} from 'react';

function App() {
  return (
    <div>
      <h1 className='title'>Burger Express</h1>
      <Link to ="/burgers"> click for burgers</Link>
      <main>
        <Routes>
            <Route path='/burgers' element={<Burgers/>} />
        </Routes>
       
    </main> 
    </div>
  );
}

export default App;
