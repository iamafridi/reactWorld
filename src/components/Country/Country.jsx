import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    //distructuring 
    const {name,flags,population,area,cca3}=country;
   console.log(country);

   //visited related 
   const [visited, setVisited] =useState(false);
const handleVisited =() =>{
    setVisited(!visited);
}


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Purple': 'white'}} >Name :{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going' }</button>
            {visited ? ' I have visited this Country.' : ' I Want To Visit'}
        </div>
    );
};

export default Country;