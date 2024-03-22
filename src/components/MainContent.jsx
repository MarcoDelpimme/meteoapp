import React from "react";
import { Col } from "react-bootstrap";
import CityCard from "./CityCard";

const MainContent = ({ cities, addCityToSelected }) => {
  return (
    <Col className="text-center">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} addCityToSelected={addCityToSelected} />
      ))}
    </Col>
  );
};

export default MainContent;
