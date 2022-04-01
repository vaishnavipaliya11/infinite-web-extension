import React, { useEffect, useState } from 'react'
import {QuoteData} from "../Data";
import axios from 'axios'

const Home = () => {
    const randomQuote= Math.floor(Math.random() * Math.floor(QuoteData.length))
    console.log(randomQuote);

    const [data,setData]= useState({})

    const url = "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Nagpur&country=India&key=cffbc1552ecc4605bb2e50e9a86243ab"

    useEffect(()=>{
        axios.get(url)
        .then((res)=> setData(res.data.data[0]))
    },[])

  const apiData= [{cityName:data.city_name,date:data.datetime, temp:data.temp,
                  windSpeed:data.wind_spd, windDirection:data.wind_cdir_full
                 }]

    console.log("data from state",data);
    console.log("api data",apiData)

  return (
    <div>
    <h1>infinite-web-extension</h1>
    <h1>{QuoteData[randomQuote].quote}</h1>
    <div>
   <img src={QuoteData[randomQuote].img}>
   
   </img> 
   <h1>{apiData.map(({cityName,date,temp,windSpeed,windDirection}) =>{
     return(
       <div>
       <h1>{cityName}</h1>
       <p>{date}</p>
       <p>{temp}</p>
       <p>{windDirection}</p>
       <p>{windSpeed}m/s</p>
       
       </div>
     )
   })}</h1>
    </div>
    </div>
  )
}

export {Home}