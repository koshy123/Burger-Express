import React, { Fragment } from 'react';
import { Link, useActionData,useParams } from 'react-router-dom';
import Create from '../components/Create.js';
import Update from '../components/Update.js';




function Customizer () {

    return (
        
        <Fragment>
           {/* <Create/> */}
           
           {/* <Update/> */}
            <p className='pick2'>Or Try Something New!</p>
            //link to functionality
            <button className="customize">Customize Your Burger</button>
            {/* <div className='goHome'><Link to='/burgerview'><button>Home</button></Link></div> */}
        </Fragment>
    )
}
export default Customizer;