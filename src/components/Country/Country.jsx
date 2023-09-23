import './Country.css'
const Country = ({country}) => {
    //distructuring 
    const {name}=country;
   console.log(country);
    return (
        <div className='country'>
            <h3>Name :{name?.common}</h3>
        </div>
    );
};

export default Country;