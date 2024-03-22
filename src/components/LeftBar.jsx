import { Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import CityList from "./CityList";

const LeftBar = ({ onSearch, selectedCities, onCityClick }) => {
  return (
    <Col>
      <h2 className="text-white">
        Your Meteo App{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sun_icon.svg/1200px-Sun_icon.svg.png"
          alt=""
          width={40}
        />
      </h2>
      <SearchBar onSearch={onSearch} />
      <CityList cities={selectedCities} onCityClick={onCityClick} />
    </Col>
  );
};

export default LeftBar;
