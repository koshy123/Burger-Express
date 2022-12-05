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
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:4000/burger/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedBurger = {
     patty: form.patty,
     cheese: form.cheese,
     toppings: form.toppings,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:4000/update/${params.id}`, {
     method: "POST",
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
       {/* <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
       </div>
       </div> */}
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}