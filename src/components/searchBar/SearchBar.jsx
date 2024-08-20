import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Form } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
            />
            <Button onClick={handleSearch}>Search</Button>
        </Container>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
