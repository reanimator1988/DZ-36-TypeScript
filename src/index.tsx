import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
const rootRender = ReactDom.createRoot(root as HTMLElement);

rootRender.render(<App />);