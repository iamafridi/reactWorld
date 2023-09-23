import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    //distructuring 
    const {name,flags,population,area,cca3}=country;
   console.log(country);

   //visited related 
   const [visited, setVisited] =useState(false);
const handleVisited =() =>{
    setVisited(!visited);
}


    return (
        <div className='country'>
            <h3>Name :{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going' }</button>
            {visited ? ' I have visited this Country.' : ' I Want To Visit'}
        </div>
    );
};

export default Country;