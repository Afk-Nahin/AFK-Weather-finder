import React from 'react'
import '../App.css';


const Weather = (props)=>{
  return (
    <div className="weather">
      { props.city && props.country && <p>Location: {props.city}, {props.country} </p>}
      {props.temperature && <p>Temperature: {props.temperature} </p>}
      {props.humidity && <p>Humidity: {props.humidity} </p>}
      {props.pressure && <p>Pressure: {props.pressure} </p>}
      {props.description && <p>Condition: {props.description} </p>}
      {props.error && <p>{props.error}</p>}
     
    </div>
  )
}

export default Weather;