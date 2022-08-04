import ReactDOM from "react-dom/client";
import React from "react";
import {
    HashRouter ,
    Routes,
    Route,
    useNavigate,

} from "react-router-dom";

import App from "./app";
import UserApp from "./userApp";
import { AboutPage } from "./pages/AboutPage";


// App
const appDiv = document.getElementById("app");
let root
if (appDiv?.className === 'mainApp'){
    root = ReactDOM.createRoot(appDiv);
    root.render(
        <HashRouter >
            <App />
        </HashRouter >
    )
} else if (appDiv?.className === 'userApp') {
    root = ReactDOM.createRoot(appDiv);
    root.render(<UserApp />)
}
