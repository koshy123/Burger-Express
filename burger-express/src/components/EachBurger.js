import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';



function Burger({ burgers }) {
    const navigate = useNavigate();
    const { burger } = useParams()
    console.log(burger)
    let showBurger = burgers.filter(menuItem => menuItem.patty === burger)

    const thisBurger = showBurger.map((sandwich) => {
       
        return (
            <div className="planetFacts">
                <div className="topRow">
                    <div className='picture'>put a burger icon here</div>
                    <div className="burgerId"><p className='number'>{sandwich.id}</p><p>burger number #</p></div>
                </div>
                <div className='bottomRow' >
                    <div className='description'> {sandwich.patty}{sandwich.cheese} {sandwich.toppings}</div>
                </div>
            </div>
        )
    })

    return (
        <div className='burgerPage'>
            {thisBurger}
            <button onClick={(e) => navigate(-1)}>back to menu</button>
        </div>
    )
}

export default Burger;