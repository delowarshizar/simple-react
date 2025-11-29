import React from "react";

const Country = ({ country }) => {
  console.log();
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Common Name: {country.name.common}</p>
      <p>Official Name: {country.name.official}</p>
    </div>
  );
};

export default Country;
