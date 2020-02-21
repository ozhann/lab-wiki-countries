import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";

const Navbar = () => {
  return <nav>WikiCountries</nav>;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/countries/:cca3" component={CountryDetail} />
      <Route path="/countries" component={CountryList} />
    </div>
  );
}

export default App;
