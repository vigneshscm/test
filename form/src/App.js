import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
  }
 }
 
 function App() {
   const [formData, setFormData] = useReducer(formReducer, {});
   const [submitting, setSubmitting] = useState(false);
 
   const handleSubmit = event => {
     event.preventDefault();
     setSubmitting(true);
 
     
   }
 
   const handleChange = event => {
     setFormData({
       name: event.target.name,
       value: event.target.value,
     });
   }
 
   return(
    <div className="wrapper">
    <h1>Login From</h1>
    {submitting &&
      <div>
        You are submitting the following:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>: {value.toString()}</li>
          ))}
        </ul>
      </div>
    }
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Firstname</p> <input name="firstname" onChange={handleChange}/>
        </label>
        <p>Lastname</p> <input name="lastname" onChange={handleChange}/>
       <label>
         <p>Gender</p>
         <select name="gender" onChange={handleChange}>
             <option value="">--Please choose an option--</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
         </select>
       </label>
      
     </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
)
}

export default App;