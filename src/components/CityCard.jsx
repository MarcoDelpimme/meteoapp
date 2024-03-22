import { Card, Col, ListGroupItem, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";

const CityCard = ({ city, addCityToSelected, forecast }) => {
  const handleAddCity = () => {
    addCityToSelected(city);
  };

  return (
    <Card id="citycard" className="text-white">
      <Card.Body>
        <Row>
          <Card.Title className="row align-items-center justify-content-center">
            <h1 className="col-auto display-1"> {city.name}</h1>
            {city.icon && (
              <img src={`http://openweathermap.org/img/wn/${city.icon}.png`} alt="Weather Icon" className="col-2" />
            )}
          </Card.Title>
          <Row className="justify-content-center gap-5">
            <Col xs={6} id="details">
              {" "}
              <h6> Temperature:</h6>
              <span>{city.temperature}°C</span>
              <br />
              <i className="bi bi-thermometer"></i>
            </Col>
            <Col xs={6} id="details">
              <h6>Humidity:</h6> <span>{city.humidity}%</span>
              <br />
              <i className="bi bi-droplet"></i>
            </Col>
            <Col xs={6} id="details">
              {" "}
              <h6>MAX Temperature:</h6> <span>{city.MaxTemp}°C</span>
              <br />
              <i className="bi bi-thermometer-sun"></i>
            </Col>
            <Col xs={6} id="details">
              {" "}
              <h6>MIN Temperature:</h6> <span>{city.MinTemp}°C</span>
              <br />
              <i className="bi bi-thermometer-snow"></i>
            </Col>
            <Button onClick={handleAddCity} id="buttonOfMain">
              <i class="bi bi-plus-square"></i>
            </Button>
            <Col xs={12}>
              <h5>Forecast:</h5>
              <ul>
                {forecast &&
                  forecast.map((item, index) => (
                    <ListGroup key={index}>
                      <ListGroupItem className="mb-2 p-3" id="listForecast">
                        {" "}
                        {item.date}: {item.temperature}°C, Humidity: {item.humidity}%
                      </ListGroupItem>
                    </ListGroup>
                  ))}
              </ul>
            </Col>
          </Row>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CityCard;
