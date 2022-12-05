import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//this shows our data and fetches it from the database
const Burger = (props) => (
    <tr>
      <td>{props.burger.patty}</td>
      <td>{props.record.cheese}</td>
      <td>{props.record.topping}</td>
      <td>
        <Link className="btn btn-link" to={`/edit/${props.burger._id}`}>Edit</Link> |
        <button className="btn btn-link"
          onClick={() => {
            props.deleteBurger(props.burger._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );
// this is used to set the burger state
   export default function BurgerList() {
    const [burgers, setBurgers] = useState([]);

//fetching data
useEffect(() => {
    async function getBurgers() {
      const response = await fetch(`http://localhost:4000/record/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const burgers = await response.json();
      setBurgers(burgers);
    }
  
    getBurgers();
  
    return;
  }, [burgers.length]);

  // deleteing burger
  async function deleteBurger(id) {
    await fetch(`http://localhost:4000/${id}`, {
      method: "DELETE"
    });
  
    const newBurgers = burgers.filter((el) => el._id !== id);
    setBurgers(newBurgers);
  }

  //this is the tutorials way of putting the data into a table
  //i would like to change this to my 
  function burgerList() {
    return burgers.map((burger) => {
      return (
        <Burger
          burger={burger}
          deleteBurger={() => deleteBurger(burger._id)}
          key={burger._id}
        />
      );
    });
  }
  
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Burger menu</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Patty</th>
            <th>Cheese</th>
            <th>toppings</th>
            <th>bun type of something</th>
          </tr>
        </thead>
        <tbody>{burgerList()}</tbody>
      </table>
    </div>
  );
 }


// function BurgerView({loading }) {
//     return (
//         <Fragment>
//             <p className="pick">Order a Tried and True</p>
//             <div className="menu">
//                 {loading && 
//                     burgers.map((burger) => {
//                          return (
//                             //using id as a way to identify the burgers, can change that based on which information
//                            //i want each of these to be a clickable burger icon
//                            <div key={burger.id} className='burgers' id={burger.id}>
//                                 <p ><Link to={'/burgerview/' + burger.id}>{burger.id}</Link></p>
//                             </div>
//                         )
//                     }
//                     )}
//             </div>
//             <p className='pick2'>Or Try Something New!</p>
            
//             //link to functionality
//             <button className="customize">Customize YOur Burger</button>
//             <div className='goHome'><Link to='/'><button>Home</button></Link></div>
//         </Fragment>
//     )
// }

// export default BurgerView;