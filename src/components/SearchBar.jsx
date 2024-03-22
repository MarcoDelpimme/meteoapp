import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCity">
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
