import { useCallback, useEffect, useState } from "react";
import MovieList from "@components/movieList/MovieList";
import SearchBar from "@components/searchBar/SearchBar";
import { getCall } from "@services/axiosInstance";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const fetchAllMovieList = useCallback(async (num) => {
        const response = await getCall(
            `/discover/movie?page=${num}&sort_by=popularity.desc`
        );
        if (response.message === "Success") {
            if (num === 1) {
                setMovies(response.data.results);
                return;
            }
            setMovies((prevMovies) => [
                ...prevMovies,
                ...response.data.results,
            ]);
        }
    }, []);
    const handleSearch = async (query) => {
        if (query === "") {
            fetchAllMovieList(1);
            setPage(1);
            return;
        }
        const response = await getCall(`/search/movie?query=${query}`);
        if (response.message === "Success") {
            setMovies(response.data.results);
        }
    };
    useEffect(() => {
        fetchAllMovieList(page);
    }, [fetchAllMovieList, page]);
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight
            )
                return;
            setPage((prevPage) => prevPage + 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <MovieList movies={movies} />
        </>
    );
};

export default HomePage;
