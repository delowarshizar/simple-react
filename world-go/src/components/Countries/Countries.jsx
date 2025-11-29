import React, { use, useState } from "react";
import Country from "../Country";
import "./Countries.css";

const Countries = ({ countryData }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  const countriesData = use(countryData);
  const country = countriesData.countries;
  const handleVisitedCountry = (country) => {
    const totalVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(totalVisitedCountry);
  };
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };
  return (
    <div>
      <h1>World {country.length} Countries </h1>
      <h3>Total Visited Country: {visitedCountry.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="added-flag">
        {visitedFlag.map((flag, index) => (
          <img key={index} src={flag} />
        ))}
      </div>
      <div className="countries">
        {country.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
