import React from 'react'
import '../App.css';

const Form = props => (
   <div className="form">
       <form onSubmit={props.getWeather}>
         <input type="text" name="city" placeholder="City..."/>
         <input type="text" name="country" placeholder = "Country..."/>
         <button className="break" type="submit">Get Weather</button>
         </form>
      </div>
)

export default Form
