import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Update() {
 const [form, setForm] = useState({
   patty: "",
   cheese: "",
   toppings: '',
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 console.log(params)

 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 async function handleDelete (event) {
  event.preventDefault()
  console.log(params.id);
  await fetch(`http://localhost:4000/api/burgers/${params.id}`, {
     method: "DELETE",
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
  
}
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedBurger = {
     patty: form.patty,
     cheese: form.cheese,
     toppings: form.toppings,
   };
 console.log(editedBurger)
 console.log(params.id)
 

   // This will send a post request to update the data in the database.
   await fetch(`https://burger-express.fly.dev/api/burgers/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedBurger),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Burger</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="patty">Patty: </label>
         <input
           type="text"
           className="form-control"
           id="patty"
           value={form.patty}
           onChange={(e) => updateForm({ patty: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cheese">Cheese: </label>
         <input
           type="text"
           className="form-control"
           id="cheese"
           value={form.cheese}
           onChange={(e) => updateForm({ cheese: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="toppings">Toppings: </label>
         <input
           type="text"
           className="form-control"
           id="toppings"
           value={form.toppings}
           onChange={(e) => updateForm({ toppings: e.target.value })}
         />
       </div>
 
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="pointer"
         />
       </div>

       <div className="delete">
                
                <button className="pointer" onClick={handleDelete}>delete</button> 
                
                
        </div>
     </form>
   </div>
 );
}