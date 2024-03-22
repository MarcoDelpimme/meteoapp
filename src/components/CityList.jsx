import { ListGroup } from "react-bootstrap";

const CityList = ({ cities, onCityClick }) => {
  const handleClick = (city) => {
    onCityClick(city);
  };

  return (
    <ListGroup className="mt-5">
      {cities.map((city, index) => (
        <ListGroup.Item className="my-1" key={index} action onClick={() => handleClick(city)}>
          <span className="me-4">
            {city.name} <br />
            <i className="bi bi-thermometer ms-2"></i> {city.temperature}°C
          </span>
          <span>
            <i className="bi bi-droplet"></i> {city.humidity}%
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;
