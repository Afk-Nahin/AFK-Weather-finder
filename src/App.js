import React, { Component } from 'react';
import './App.css';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';

//const API_KEY = "aeaec8117fa096fd063404c3cb1ce524";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    error: undefined
    
  }

 getWeather = async (e) =>{
   e.preventDefault();
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=aeaec8117fa096fd063404c3cb1ce524`);
   const data = await api_call.json();
   console.log(data);

   if (city && country){
    this.setState({
     temperature: data.main.temp,
     city: data.name,
     country: data.sys.country,
     humidity: data.main.humidity,
     pressure: data.main.pressure,
     description: data.weather[0].description,
     error: ""
   })
   }else{
     this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    error: "Please enter the value."
     })
   }
 }

  render() {
    return (
      <div className="App">
        <div className="grid">
        
        <Titles />
        
        <span className="form_weather">
        <Form getWeather={this.getWeather}/>
        <Weather
        temperature={this.state.temperature}
        pressure={this.state.pressure}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
        </span>
        </div>
      </div>
    );
  }
}

export default App;
