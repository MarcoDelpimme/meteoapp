import { Card, CardText } from "react-bootstrap";

const CityCard = ({ city }) => {
  return (
    <Card id="citycard" className="text-white">
      <Card.Body>
        <Card.Title>
          <h1>{city.name}</h1>
          {city.icon && <img src={`http://openweathermap.org/img/wn/${city.icon}.png`} alt="Weather Icon" />}
        </Card.Title>
        <Card.Text>Temperature: {city.temperature}°C</Card.Text>
        <Card.Text>Humidity: {city.humidity}%</Card.Text>
        <Card.Text> MAX Temperature: {city.MaxTemp}°C</Card.Text>
        <Card.Text> MIN Temperature: {city.MinTemp}°C</Card.Text>

        <CardText></CardText>
      </Card.Body>
    </Card>
  );
};

export default CityCard;
