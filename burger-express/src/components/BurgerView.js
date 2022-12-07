import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Create from './Create.js'


function BurgerView({loading, burgers }) {
    return (
        <Fragment>
            <p className="pick">Order a Tried and True</p>
            <div className="menu">
                {loading && 
                    burgers.map((burger) => {
                      console.log(burger)
                         return (
                           <div key={burger.id} className='burgers' id={burger.id}>
                                <p ><Link to={'/burgerview/' + burger._id}>{burger.patty}</Link></p>
                            </div>
                        )
            
                    }
                    )}

            </div>
            <p className='pick2'>Or Try Something New!</p>
            
           <Create />
    
           
        </Fragment>
    )
}

export default BurgerView;
