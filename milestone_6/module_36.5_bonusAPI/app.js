const api_key = "e58412324a5cc5cc1e234665e03fe6e9";

document.getElementById("city_input").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    getWeatherData();
  }
});

const getWeatherData = async () => {
  const cityInput = document.getElementById("city_input");
  const city = cityInput.value;
  cityInput.value = "";

  try {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
  
  } catch(error){
    alert("city not fond");
  }
};

const setInnerText = (id,text)=>{
  document.getElementById(id).innerText = text
}

const showData = (temperature) => {
  setInnerText('city',`${temperature?.name},${temperature?.sys?.country}`)
  setInnerText('temp',(parseFloat(temperature?.main?.temp) - 273.15).toFixed(3))
  setInnerText('looks',temperature?.weather[0]?.main)

  //set weather icon
  const url =`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const img = document.getElementById('icon')
  img.setAttribute('src',url)
};