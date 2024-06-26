import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LeftBar from "./components/LeftBar";
import MainContent from "./components/MainContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CityList from "./components/CityList";

const API_KEY = "caf5059b1aa192c345dbb78bf02b29c6";

const App = () => {
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [forecast, setForecast] = useState([]);

  const addCityToSelected = (city) => {
    setSelectedCities((prevCities) => [...prevCities, city]);
  };

  const handleCityClick = (city) => {
    setCities([city]);
    handleForecastSearch(city.name);
  };

  //FORECAST FOR DAYS PREVISION
  const handleForecastSearch = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);

      const forecastData = data.list
        .filter((item) => {
          return item.dt_txt.includes("2024");
        })
        .map((item) => {
          return {
            date: item.dt_txt,
            temperature: item.main.temp,
            humidity: item.main.humidity,
            icon: item.weather[0].icon,
          };
        });
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  //FORECAST FOR DAYS PREVISION

  const handleSearch = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);
      const cityData = {
        name: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        MaxTemp: data.main.temp_max,
        MinTemp: data.main.temp_min,
        icon: data.weather[0].icon,
      };

      if (!cities.some((city) => city.name === cityData.name)) {
        setCities([cityData]);
        handleForecastSearch(cityName);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={3} id="left-bar">
            <LeftBar onSearch={handleSearch} selectedCities={selectedCities} onCityClick={handleCityClick} />
          </Col>
          <Col xs={9}>
            {" "}
            <MainContent cities={cities} addCityToSelected={addCityToSelected} forecast={forecast} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
