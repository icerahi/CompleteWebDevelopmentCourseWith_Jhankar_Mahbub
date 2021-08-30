const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>${country.name} </h3>
    <p>${country.capital} </p>
    <button onclick="loadDetails('${country.name}')"> Details </button>
    `
    countriesDiv.appendChild(div);
    // const h3 = document.createElement("h3");
    // h3.innerText = country.name;
    // div.appendChild(h3);
    // const p = document.createElement("p");
    // p.innerText = country.capital;
    // div.appendChild(p);
    // countriesDiv.appendChild(div);
  });
};

const loadDetails = name =>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    const countryDiv = document.getElementById('country_details')
    countryDiv.innerHTML = `
    <h5>${country.name} </h4>
    <p> population: ${country.population} </p>
    <img width="150px" src="${country.flag}" />
    `
}