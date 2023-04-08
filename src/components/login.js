import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Login() {
 const [form, setForm] = useState({
   name: "",
   email: "",
   password: "",
   balance: 100
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
   const currentPerson = { ...form };
 
   await fetch(`http://localhost:5000/record/${params.email}`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(currentPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({email: "", password: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="email">email</label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">password</label>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}