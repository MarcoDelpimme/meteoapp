import React from "react";
import { Col } from "react-bootstrap";
import CityCard from "./CityCard";

const MainContent = ({ cities, addCityToSelected, forecast }) => {
  return (
    <Col className="text-center" id="maincontent">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} addCityToSelected={addCityToSelected} forecast={forecast} />
      ))}
    </Col>
  );
};

export default MainContent;
