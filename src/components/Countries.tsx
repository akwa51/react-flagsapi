import {useState , useEffect} from 'react'

const url='https://restcountries.com/v2/all'

type countryType={
    name:string,
    flags:{
        png:string
    },
    population:number,
    region:string,
    capital:string,
    numericCode:number
}

const Countries = () => {
    const [countries, setCountries]=useState<countryType[]>([]);

    useEffect (()=>{
        const fetchCountry=async()=>{
            const response=await fetch(url);
            const mcountries =await response.json();
            setCountries(mcountries);
        }

        fetchCountry();
    },[]);


  return (
    <>
        <section className='grid scInfo'>
            {countries.map((country,index)=>{

                const name=country.name;
                const flag=country.flags.png;
                const {numericCode,population,region,capital}=country;
                
                let keyd=numericCode;
                
                    return(
                        <article key={keyd+index} className='scInfo boxChar'>
                        <img className='cflag' src={flag.toString()} alt={name.toString()}/>
                            <div className='countryInfo'>
                                <h3 >{name}</h3>
                                <h4 className='scInfo'>Population: <span>{population}</span></h4>
                                <h4 className='scInfo'>Region: <span>{region}</span> </h4>
                                <h4 className='scInfo'>Capital:<span>{capital}</span></h4>
                            </div>
                        </article>
                    )

                })

            }
        </section>
      
    </>
  )
}

export default Countries
