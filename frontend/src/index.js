import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import { configureStore } from './store/store';

import "./styles/custom-styles.css";

const mountApplication = document.getElementById("root");

const store = configureStore({});

ReactDOM.render(<Main store={store}/>, mountApplication);
