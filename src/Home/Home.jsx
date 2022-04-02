import React, { useEffect, useState } from "react";
import { QuoteData } from "../Data";
import axios from "axios";
import "../Home/Home.css";

const Home = () => {
  const randomQuote = Math.floor(Math.random() * Math.floor(QuoteData.length));
  console.log(randomQuote);

  const newDate = Date();
  console.log(newDate);

  const [data, setData] = useState({});

  const url =
    "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Nagpur&country=India&key=cffbc1552ecc4605bb2e50e9a86243ab";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.data[0]));
  }, []);

  const apiData = [
    {
      cityName: data.city_name,
      date: data.datetime,
      temp: data.temp,
      windSpeed: data.wind_spd,
      windDirection: data.wind_cdir_full,
    },
  ];

  return (
    <div className="bg-img-container">
      <h1>
        {apiData.map(({ cityName, date, temp, windSpeed, windDirection }) => {
          return (
            <div
              className="weather"
              style={{
                backgroundImage: `url(${QuoteData[randomQuote].img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100%",
              }}
            >
              <div className="display-row topnav text-color">
                <p>{cityName}</p>
                <p>
                  <span>
                    <i class="bi bi-clouds"></i>
                  </span>
                  {temp}°C
                </p>
              </div>
              <div className="quote text-color">
                <h5>{QuoteData[randomQuote].quote}</h5>
                <p>{date}</p>
              </div>
              <div className="display-row footer text-color">
                <p>{windDirection}</p>
                <p>WindSpeed : {windSpeed}(m/s)</p>
              </div>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export { Home };
