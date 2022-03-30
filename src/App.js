import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';

function App() {
  const apiKey = "75c8f07483cb32d917e05766f1ef7427";
  const [inputCity,setInputCity]= useState("")
  const [data,setData]=useState({});

  const getweatherDetails = (cityName)=>{
    if(!cityName) return
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" +apiKey;
    axios.get(apiURL).then((res)=>{
      console.log("response",res);

      setData(res.data)
    }).catch((err)=>{
      console.log("error",err.data);
    });
  }

  const handleChangeInput = (e)=>{
    console.log("value",e.target.value)
    setInputCity(e.target.value)

  }
const handleSearch=()=>{
getweatherDetails(inputCity);
}

  return (
    <div className="col-md-12">
    <div className='wetherBg'>
      <h1 className='heading'>Weather App</h1>
      <div className='d-grid gap-3 col-4 mt-4'>
      <input type="text/" className='form-control' value={inputCity} onChange={handleChangeInput}/>
      <button className='btn btn-primary' type='button' 
      placeholder='Please Enter your city' onClick={handleSearch}>Search</button>
      </div>
    </div>
    <div className='col-md-12 text-center mt-6'>
    <div className='shadow rounded weatherResultBox'>
      <img className='weathorIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07Aj4ckoXUJGCWXb61P69sxW0uUOp9kAeTA&usqp=CAU'/>
      <h3 className='weathorCity'>    {data?.name}</h3>
      <h4 className='weathorTemp'>    {((data?.main?.temp)-274.15).toFixed(2)}°C </h4>
      <h6 className='day'>pressure  : {data?.main?.pressure}</h6>
      <h6 className='day'>sea level  :  {data?.main?.sea_level}</h6>
      <h6 className='day'>Ground level :    {data?.main?.grnd_level}</h6>
      <h6>Base : {data?.base}</h6> 
      <h6>feels_like : {data?.main?.feels_like}</h6>
      <h6 className='day'>Monday     {((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
      <h6 className='day'>Tuesday     {((data?.main?.temp)-271.15).toFixed(2)}°C</h6>
      <h6 className='day'>Wednesday   {((data?.main?.temp_min)-273.15).toFixed(2)}°C</h6>
      <h6 className='day'>Thursday   {((data?.main?.temp_max)-272.15).toFixed(2)}°C</h6>
      <h6 className='day'>Friday     {((data?.main?.temp)-273.15).toFixed(2)}°C</h6>

      
     
     
    </div>
  
    </div>


    </div>
  );
}

export default App;
