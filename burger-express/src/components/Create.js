import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   patty: "",
   cheese: "",
   toppings: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newBurger = { ...form };
 
   await fetch("http://localhost:4000/api/burgers", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newBurger),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ patty: "", cheese: "", toppings: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create-A-Burger</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="patty">Patty</label>
         <input
           type="text"
           className="form-control"
           id="patty"
           value={form.patty}
           onChange={(e) => updateForm({ patty: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">cheese</label>
         <input
           type="text"
           className="form-control"
           id="cheese"
           value={form.cheese}
           onChange={(e) => updateForm({ cheese: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="toppings">toppings</label>
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
       <div className="form-group">
         <input
           type="submit"
           value="Create burger"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
