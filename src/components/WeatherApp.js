import React, {useEffect, useState} from "react";
import "./WeatherApp.css";
import tempIcon from "../assets/temperature-icon.png";
import locationIcon from "../assets/location-icon.png";


const WeatherApp = () =>{

  const [cityName, setCityName] = useState(null);
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Godda");

  useEffect(() =>{
      const fetchApi = async() => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=333f1a5584dd90007e6ccde9ea30bc4e&units=metric`;
          const response = await fetch(url);
          const resJson = await response.json();
          setCityName(resJson.main);
          setCity(resJson.wind);
      }
       
      fetchApi();
  },[search] );

  return(
    <> 
       <div className="App-box">

          <div className="inputData">
             <input className="inputField" 
             placeholder="Enter City Name..." 
             type="search"
             value={search}
             onChange={(event)=>{setSearch(event.target.value)}} 
             />
          </div>

         {!cityName ? (
          <div className="noData"><p>No data found</p></div>
         ) : (
            <div>
                <div className="info">
                      <div className="info-box-01">
                        <img src={locationIcon} alt="location-icon" />
                        <h1>{search}</h1>
                      </div>

                      <div className="info-box-02">
                        <img src={tempIcon} alt="temperature-icon" />
                        <div className="border"></div>
                        <h1>{cityName.temp} °C</h1>
                      </div>
            
                      <div className="bottom-infobox">
                           <div className="info-box-03">
                              <div className="b1">
                                  <i class='bx bx-water'></i>
                                 
                              </div>
                              <div className="b2">
                                <h1>{cityName.humidity} %rh</h1>
                                <p>Humidity</p>
                              </div>
                           </div>
                           <div className="border02"></div>
                           <div className="info-box-04">
                              <div className="b1">
                                  <i class='bx bx-wind'></i>   
                              </div>
                              <div className="b2">
                                <h1>{city.speed} mph</h1>
                                <p>Wind Speed</p>
                              </div>
                           </div>
                      </div>
            
                </div>
             </div>
          )
         }

         <div class="wave"></div>
         <div class="wave"></div>
       
       </div>
    </>
  );
}

export default WeatherApp;