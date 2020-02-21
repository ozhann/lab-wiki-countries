import React from "react";
import countryData from "./countries.json";
import { Link } from "react-router-dom";

const CountryList = () => {
  let countries = countryData.map(country => {
    return (
      <p>
        <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
      </p>
    );
  });

  return countries;
};

export default CountryList;
