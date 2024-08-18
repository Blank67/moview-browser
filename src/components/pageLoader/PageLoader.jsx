import "./PageLoader.scss";
import { Image } from "react-bootstrap";
import loader from "@assets/loader.gif";
import { useSelector } from "react-redux";

const PageLoader = () => {
    const isLoading = useSelector((state) => state.loader.pageLoading);
    return (
        isLoading && (
            <div className="loading-backdrop">
                <div className="loading">
                    <Image src={loader} />
                </div>
            </div>
        )
    );
};

export default PageLoader;
