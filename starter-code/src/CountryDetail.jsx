import React from "react";
import countryData from "./countries.json";



const CountryDetail = props => {
  const { cca3 } = props.match.params;
  console.log(cca3);
  const country = countryData.find(country => {
    return country.cca3 === cca3;
  });

  return (
    <div>
      
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <p>Borders: {country.borders.join(", ").trim()}</p>


    </div>
  );
};

export default CountryDetail;
