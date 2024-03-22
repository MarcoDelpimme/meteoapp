import { Col } from "react-bootstrap";
import SearchBar from "./SearchBar";

const LeftBar = ({ onSearch }) => {
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
    </Col>
  );
};

export default LeftBar;
