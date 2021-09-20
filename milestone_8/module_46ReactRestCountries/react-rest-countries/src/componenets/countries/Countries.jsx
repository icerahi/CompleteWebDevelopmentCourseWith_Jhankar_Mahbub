import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
    
  }, []);
  return (
    <div>
      <h1>HEllow from countries: {countries.length}</h1>
      <div className="countries">
        {countries?.map((country, key) => (
          <Country key={key} country={country} />
                /*<Country
                name={country.name}
                capital={country.capital}
                population={country.population}
                /> */
        ))}
      </div>
    </div>
  );
};

export default Countries;
