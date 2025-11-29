import React, { use } from "react";
import Country from "../Country";
import "./Countries.css";

const Countries = ({ countryData }) => {
  const countriesData = use(countryData);
  const country = countriesData.countries;
  return (
    <div>
      <h1>World All Countries </h1>
      <div className="countries">
        {country.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
