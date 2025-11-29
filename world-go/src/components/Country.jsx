import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisted] = useState(0);
  const handleVisited = () => {
    {
      setVisted(!visited);
    }
  };
  return (
    <div className={`country ${visited && `visited`}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Common Name: {country.name.common}</p>
      <p>Official Name: {country.name.official}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 30000 ? " Big Country" : " Small Country"}
      </p>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
