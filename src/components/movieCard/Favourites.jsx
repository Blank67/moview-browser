import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import fav from "@assets/star-fill.png";
import notFav from "@assets/star-empty.png";

const Favorites = ({ movie }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);
    const handleFavorite = (movie) => {
        let updatedFavorites = [...favorites];
        const isFav = updatedFavorites.find((itm) => itm.id === movie.id);
        if (isFav) {
            updatedFavorites = updatedFavorites.filter(
                (fav) => fav.id !== movie.id
            );
        } else {
            updatedFavorites.push(movie);
        }
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <Image
            className="test"
            src={favorites.some((fav) => fav.id === movie.id) ? fav : notFav}
            onClick={() => handleFavorite(movie)}
        />
    );
};
Favorites.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
    }).isRequired,
};
export default Favorites;
