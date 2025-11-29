import React, { use } from "react";
import Country from "../Country";

const Countries = ({ countryData }) => {
  const countriesData = use(countryData);
  const country = countriesData.countries;
  return (
    <div>
      <h1>My React Project</h1>
      {country.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
