import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   patty: "",
   cheese: "",
   toppings: "",
 });
 const navigate = useNavigate();
 

 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 

 async function onSubmit(e) {
   e.preventDefault();
 
  
   const newBurger = { ...form };
 
   await fetch("https://burger-express.fly.dev/api/burgers", {
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
     <h3 className="titleLine">Create-A-Burger</h3>
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
       
       <div className="form-group">
         <input
           type="submit"
           value="Create burger"
           className="pointer"
         />
       </div>
     </form>
   </div>
 );
}
