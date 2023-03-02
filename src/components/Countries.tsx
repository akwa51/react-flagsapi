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
    const [searchText, setSearchText]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');
    const [region, setRegion]=useState<string>('Filter by Region');



    useEffect (()=>{
        const fetchCountry=async()=>{
            try {
                const response=await fetch(url);
                if(!response.ok) throw new Error('Error!!...Connection Not Established!')
                const mcountries =await response.json();
                setCountries(mcountries);
                setIsLoading(false);
                
            } catch (error:any) {
                setIsLoading(false)
                setError(error.message)
            } 
        }

        fetchCountry()
    },[]);


    const FilterByRegion=(option:string)=>{
        setRegion(option);
    
        
    }

    const SearchByCountry=(option:string)=>{
        setSearchText(option);
        setRegion('Filter by Region')
    }


   const filterCountries=region==='Filter by Region'?countries.filter((country)=>country.name.toLowerCase().includes(searchText.toLowerCase())):
   countries.filter((country)=>country.region.toLowerCase().includes(region.toLowerCase()))

//    if(filterCountries.length===0) {setError('No Record Found .....!!! ')}
    

  return (
    <>
            
        <Search countrySearch={SearchByCountry} value={searchText} oregion={region} regionSearch={FilterByRegion}/>
        
        {isLoading&&!error&&<p className='LoadingMsg'>Loading......</p>}
        {error&&!isLoading&&<p className='ErrorMsg'>{error}</p>}
        {filterCountries.length===0&&!isLoading&&<p className='LogMsg'>{'No Record Found .....!!! '}</p>}
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
