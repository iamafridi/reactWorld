const Country = ({country}) => {
    //distructuring 
    const {name}=country;
   console.log(country);
    return (
        <div>
            <h3>Name :{name.common}</h3>
        </div>
    );
};

export default Country;