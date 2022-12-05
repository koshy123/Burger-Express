import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Create from '../components/Create.js';
import Update from '../components/Update.js';





function Customizer () {
    return (
        <Fragment>
           <Create/>
           
            <div className="delete">
                <form>
                <input type='text' label="which burger?" ></input>
                <button>delete</button> 
                </form>
                
            </div>
           <Update/>
            <p className='pick2'>Or Try Something New!</p>
            //link to functionality
            <button className="customize">Customize YOur Burger</button>
            <div className='goHome'><Link to='/'><button>Home</button></Link></div>
        </Fragment>
    )
}
export default Customizer;