import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import Favorites from "./Favourites";

const MovieCard = ({ movie }) => {
    return (
        <Card className="movie-card">
            <Card.Img
                className="img-fluid h-100"
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <Card.Body>
                <div>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Release Date: {movie.release_date}</Card.Text>
                </div>
                <Favorites movie={movie} />
            </Card.Body>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;
