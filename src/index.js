import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./components/Themes/ThemeContext";
import { UserContext } from "./pages/Context";

// const checkCustomer = localStorage.getItem("customer_login");

const userValue = localStorage.getItem("customer_login");
const checkCustomer = { login: userValue   };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider>
      <UserContext.Provider value={checkCustomer}>
        <App />
      </UserContext.Provider>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
