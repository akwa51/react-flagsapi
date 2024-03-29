import {useState , useEffect,useContext } from 'react'
import {Link} from 'react-router-dom'
import Search from '../components/Search'
import { DataFileContext } from '../context/DataContext';


const Countries = () => {
    const [searchText, setSearchText]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');
    const [region, setRegion]=useState<string>('Filter by Region');

    const {countriesData,setCountriesData}=useContext(DataFileContext)

    useEffect (()=>{

        if (!countriesData){
            const FetchAllCountries=async()=>{
                try {
                    const response=await fetch('https://restcountries.com/v2/all');
                    if(!response.ok) throw new Error('Error!!...Connection Not Established!')
                    const data =await response.json();
                    setCountriesData(data);
                    setError('');
                } catch (error:any) {
                    setError(error.message)
                } 
            }
            
            FetchAllCountries()
        }else{
            setError('');
        }
    },[countriesData,setCountriesData]);


    //Create conditions for filtering

//    const filterCountries=region!=='Filter by Region'?countries.filter((country)=>country.name.toLowerCase().includes(searchText.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())):
//    countries.filter((country)=>country.name.toLowerCase().includes(searchText.toLowerCase()))

   const filterCountries=region!=='Filter by Region'?countriesData.filter((country)=>country.name.toLowerCase().includes(searchText.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())):
   countriesData.filter((country)=>country.name.toLowerCase().includes(searchText.toLowerCase()))
   

  return (
    <>
            
        <Search countrySearch={setSearchText} value={searchText} oregion={region} regionSearch={setRegion}/>
        
        {isLoading&&<p className='LoadingMessage'>Loading......</p>}
        {isLoading&&filterCountries.length>0?setIsLoading(false):error}
        {!isLoading&&filterCountries.length===0&&<p className='LogMessage'>{'No Record Found .....!!! '}</p>}

        <div className='mainContainer'>
            <section className= 'grid'>
                {filterCountries.map((country)=>{

                    const name=country.name;
                    const flag=country.flags.png;
                    const {numericCode,population,region,capital}=country;
                    
                        return(
                                
                            <article key={numericCode} >
                                <img className='imageflag' src={flag.toString()} alt={name.toString()}/>
                                <div className='countryInfo'>
                                    <Link to = {`/${name}`} className='linkText'><h3 >{name}</h3></Link>
                                    <h4>Population: <span>{population.toLocaleString('en-US')}</span></h4>
                                    <h4>Region: <span>{region}</span> </h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                </div>
                            </article>   
                        )
                    })
                }
            </section>
        </div>
    </>
  )
}

export default Countries
