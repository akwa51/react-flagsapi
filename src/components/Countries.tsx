import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import Search from '../components/Search'

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
    const [searchText, setSearchText]=useState<string>('');

    useEffect (()=>{
        const fetchCountry=async()=>{
            const response=await fetch(url);
            const mcountries =await response.json();
            setCountries(mcountries);
        }

        fetchCountry()
    },[]);


   const filterCountries=countries.filter((country)=>country.name.toLowerCase().includes(searchText.toLowerCase())
        ||country.region.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <>
        <Search countrySearch={setSearchText} value={searchText}/>
        <section className='grid scInfo'>
            {filterCountries.map((country)=>{

                const name=country.name;
                const flag=country.flags.png;
                const {numericCode,population,region,capital}=country;
                
                    return(
                            
                        <article key={numericCode}>
                            <img className='cflag' src={flag.toString()} alt={name.toString()}/>
                            <div className='countryInfo'>
                                <Link to = {`/${name}`} ><h3 >{name}</h3></Link>
                                <h4 className='scInfo'>Population: <span>{population.toLocaleString('en-US')}</span></h4>
                                <h4 className='scInfo'>Region: <span>{region}</span> </h4>
                                <h4 className='scInfo'>Capital: <span>{capital}</span></h4>
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
