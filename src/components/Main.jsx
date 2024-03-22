import { Col } from "react-bootstrap";
import CityCard from "./CityCard";

const MainContent = ({ cities }) => {
  return (
    <Col className="text-center">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} />
      ))}
    </Col>
  );
};

export default MainContent;
