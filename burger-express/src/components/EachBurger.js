import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Update from './Update';


function Burger({ burgers }) {
    const navigate = useNavigate();
    const { id } = useParams()
  
    let showBurger = burgers.filter(menuItem => menuItem._id === id)
   
    const thisBurger = showBurger.map((sandwich) => {
      
        return (
            <div className="burgerBox">
                <div className="burgerDescript">
                    <div className='burgerTitle'>Have it as is!</div>
                    <div className="burgerId"><p className='number'>{sandwich.id}</p><p>This burger contains:</p></div>

                    <div className='description'> {sandwich.patty}<br/>{sandwich.cheese}<br/> {sandwich.toppings}</div>
                </div>
                <div className="updateBox">
                    <Update/>
                </div>
            </div>
        )
    })
    

    return (
        <div className='burgerPage'>
            {thisBurger}

        </div>
    )
}

export default Burger;