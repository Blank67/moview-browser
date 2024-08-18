import MovieCard from "@components/movieCard/MovieCard";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
    return (
        <Container className="movie-list-container">
            <Row>
                {movies.map((movie) => (
                    <Col xs={6} md={4} key={movie.id} className="mt-3 d-flex">
                        <MovieCard key={movie.id} movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MovieList;
