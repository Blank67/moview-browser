import PageLoader from "@components/pageLoader/PageLoader";
import { AxiosInterceptor } from "@services/AxiosInterceptor";
import { Provider } from "react-redux";
import { store } from "@store/index";
import HomePage from "@pages/HomePage";

const App = () => {
    return (
        <Provider store={store}>
            <AxiosInterceptor>
                <PageLoader />
                <HomePage />
            </AxiosInterceptor>
        </Provider>
    );
};

export default App;
