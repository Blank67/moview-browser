import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
});

export const getCall = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return { message: "Success", data: response.data };
    } catch (error) {
        return {
            message: "Fail",
            data: error?.response?.data ?? "Something went wrong.",
        };
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}`, {
            params: {
                api_key: "9d94ddca6954b1d4dcefc736edcf7e87",
            },
        });
        return { message: "Success", data: response.data };
    } catch (error) {
        return {
            message: "Fail",
            data: error?.response?.data ?? "Something went wrong.",
        };
    }
};
