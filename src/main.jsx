import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/index";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
