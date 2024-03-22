import { Card, CardText, Col, Row } from "react-bootstrap";

const CityCard = ({ city }) => {
  return (
    <Card id="citycard" className="text-white">
      <Card.Body>
        <Row align-center>
          <Card.Title className="row align-items-center justify-content-center">
            <h1 className="col-auto display-2"> {city.name}</h1>
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
              <i class="bi bi-thermometer"></i>
            </Col>
            <Col xs={6} id="details">
              <h6>Humidity:</h6> <span>{city.humidity}%</span>
              <br />
              <i class="bi bi-droplet"></i>
            </Col>
            <Col xs={6} id="details">
              {" "}
              <h6>MAX Temperature:</h6> <span>{city.MaxTemp}°C</span>
              <br />
              <i class="bi bi-thermometer-sun"></i>
            </Col>
            <Col xs={6} id="details">
              {" "}
              <h6>MIN Temperature:</h6> <span>{city.MinTemp}°C</span>
              <br />
              <i class="bi bi-thermometer-snow"></i>
            </Col>
          </Row>

          <CardText></CardText>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CityCard;
