import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

const [countries, setCountries]=useState([]);
const [visitedCountries, setVisitedCountries] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
},[])

//visited Country 
const handleVisitedCountry = country =>{
    // console.log(country);
    const newVisitedCountries = [...visitedCountries,country];
setVisitedCountries(newVisitedCountries);

// amra push korte parbo na tai sprad operator dite kaj korte hobe

}


    return (
        <div>
            <h3>Countries : {countries.length}</h3>
<div>
    <h4>Visited Countries :{visitedCountries.length}</h4>
    <ul>
        {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li> )
        }

    </ul>
</div>


      <div className="country-container">
      {
        countries.map(country =><Country key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}        country={country}></Country>)
      }
      {/* props hishabe amra function o pataite pari */}
      </div>
      
      
        </div>
    );
};

export default Countries;