import React, { useEffect, useState } from "react";
import { QuoteData } from "../Data";
import axios from "axios";
import "../Home/Home.css";

const Home = () => {
  const randomQuote = Math.floor(Math.random() * Math.floor(QuoteData.length));
  const newDate = Date();

  const [data, setData] = useState({});
  const [name, setName] = useState("");

  const [ques, setQues] = useState("what is your name?");
  const [userName, setUserName] = useState("");
  const [goal, setGoal] = useState("");
  const [userGoal, setUserGoal] = useState("");
  const [nameStyle, setStyle] = useState();
  const [goalStyle, setGoalStyle] = useState({ display: "none" });
  const [userGoalStyle, setUserGoalStyle] = useState({ display: "block" });

  const url =
    "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Nagpur&country=India&key=cffbc1552ecc4605bb2e50e9a86243ab";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.data[0]));
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?')";
  });

  const apiData = [
    {
      cityName: data.city_name,
      date: data.datetime,
      temp: data.temp,
      windSpeed: data.wind_spd,
      windDirection: data.wind_cdir_full,
    },
  ];

  function handelBtn() {
    setQues("good evening");
    setUserName(name);
    setStyle({ display: "none" });
    setGoalStyle({ display: "inline" });
  }

  function handelGoal() {
    setUserGoal(goal);
    setUserGoalStyle({ display: "none" });
  }

  return (
    <div className="bg-img-container">
      <h1>
        {apiData.map(({ cityName, date, temp, windSpeed, windDirection }) => {
          return (
            <div className="weather">
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
                <p>{newDate}</p>

                <div>
                  <p>
                    {ques} {userName}
                  </p>
                  <input
                    style={nameStyle}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <button style={nameStyle} onClick={handelBtn}>
                    check
                  </button>

                  <div style={userGoalStyle}>
                    <input
                      style={goalStyle}
                      onChange={(event) => {
                        setGoal(event.target.value);
                      }}
                    />

                    <button style={goalStyle} onClick={handelGoal}>
                      my goal
                    </button>
                  </div>

                  <p> {userGoal}</p>
                </div>
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
