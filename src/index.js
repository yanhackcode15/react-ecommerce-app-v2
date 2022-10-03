
import React from "react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// import ReactDOM from "react-dom"
//changes in react 18 from render to create root: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import { createRoot } from 'react-dom/client';
import "./index.css" //this is how css is compiled in React. the loader is in webpack
import App from "./app"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ContextProvider} from "./Context"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture"
};

root.render(
    <ContextProvider>
        <PayPalScriptProvider options={initialOptions}>
            <App />
        </PayPalScriptProvider>
    </ContextProvider>
);
