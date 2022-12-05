import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';




function BurgerView({loading, burgers }) {
    return (
        <Fragment>
            <p className="pick">Order a Tried and True</p>
            <div className="menu">
                {loading && 
                    burgers.map((burger) => {
                         return (
                      
                            //using id as a way to identify the burgers, can change that based on which information
                           //i want each of these to be a clickable burger icon
                           <div key={burger.id} className='burgers' id={burger.id}>
                                <p ><Link to={'/burgerview/' + burger.id}>{burger.id}</Link></p>
                            </div>
                        )
            
                    }
                    )}

            </div>
            <p className='pick2'>Or Try Something New!</p>
            
            //link to functionality
            <button className="customize">Customize YOur Burger</button>
            <div className='goHome'><Link to='/'><button>Home</button></Link></div>
        </Fragment>
    )
}

export default BurgerView;