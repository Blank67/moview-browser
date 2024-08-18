import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { togglePageLoader } from "@store/loader-slice/loaderSlice";
import PropTypes from "prop-types";
import { axiosInstance } from "./axiosInstance";

export const AxiosInterceptor = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const onRequest = (request) => {
            dispatch(togglePageLoader(true));
            return request;
        };
        const onResponse = (response) => {
            dispatch(togglePageLoader(false));
            return response;
        };
        const onError = (error) => {
            dispatch(togglePageLoader(false));
            return Promise.reject(error);
        };
        const reqInterceptor = axiosInstance.interceptors.request.use(
            onRequest,
            onError
        );
        const resInterceptor = axiosInstance.interceptors.response.use(
            onResponse,
            onError
        );
        return () => {
            axiosInstance.interceptors.response.eject(resInterceptor);
            axiosInstance.interceptors.request.eject(reqInterceptor);
        };
    }, [dispatch]);
    return <>{children ?? null}</>;
};

AxiosInterceptor.propTypes = {
    children: PropTypes.node,
};
