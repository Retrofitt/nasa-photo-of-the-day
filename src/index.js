import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'


ReactDOM.render(<App />, document.getElementById("root"));
