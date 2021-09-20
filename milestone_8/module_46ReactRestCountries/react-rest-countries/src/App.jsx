import "./App.css";
import Countries from "./componenets/countries/Countries";
import Footer from "./componenets/footer/Footer";
 
function App() {
  return (
    <div className="App">
      <Countries/>
      <Footer/>
    </div>
  );
}

/* const Countries=()=>{
  const [countries, setCountries] = useState([])

  useEffect(async()=>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    setCountries(data);
  },[])

  return (
    <div>
      <h2>Traveling around the world!!</h2>
      {countries?.map(country=> <Country name={country.name} capital={country.capital} /> )}
    </div>
  )
}

const Country=(props)=>{
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.name}</p>
    </div>
  )
} */

export default App;
