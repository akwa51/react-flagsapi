import { useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom' 
import './country.css'


type countryDetail={
    name:string,
    nativeName:string,
    flags:{
        png:string
    },
    population:number,
    region:string,
    subregion:string,
    capital:string,
    numericCode:number,
    topLevelDomain:string[],
    currencies:{code:string,name:string,symbol:string}[],
    languages:{name:string}[],
    borders:string[],
}


const CountryBorders = () => {
    const [countborder,setCountBorder]=useState<countryDetail[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(true);
    const [error,setError]=useState('');
    
    const {ccode}=useParams();
    console.log(ccode);


  
    useEffect(()=>{
        const fetchCountryDetail=async()=>{

            if (ccode){
                console.log(ccode)

           
                try {
                    const result=await fetch(`https://restcountries.com/v2/alpha/${ccode}`);
                
                    if (!result.ok){
                        setError('Connection Error.... Record not available!!')
                        throw new Error ('Connection Error.... Record not available!!')
                    }
                    const data= await result.json();
                    setCountBorder(data); 
                    console.log(countborder);
                    setIsLoading(false);
                }catch (error:any) {
                    setIsLoading(false);
                    setError(error.message);
                }
            }
        } 
            
        fetchCountryDetail();

    },[ccode,countborder])

  return (
        <>

            {/* <Link to='/' className='bkbutton'>&larr; Back</Link>  */}
            
                {/* {isLoading&&!error&&<p className='LoadMsg'>Loading......</p>}
                {error&&!isLoading&&{error}}

                <div className='count_bg'>
                    <section >
                        {country.map((item)=>{
                            const fname=item.name;
                            const flag=item.flags.png;
                            // const currencies=item.currencies&&item.currencies[0].name;
                            const currencies=item.currencies&&item.currencies;
                            const languages=item.languages&&item.languages[0].name;
                            const {nativeName,numericCode,population,region,capital,subregion,topLevelDomain,borders}=item;

                            return(
                                    <article  key={numericCode} className='country_container'>
                                        <div className='csflag'>
                                            <img className='country_img' src={flag.toString()} alt={fname.toString()}/> 
                                        </div>
                                        <div className='country_group2'>
                                            <div className='county_specs'>
                                                <div className='country_bloc1'>
                                                    <h2 className='country_name'>{fname}</h2>
                                                    <h5 className='native_class'>Native Name:  <span>{nativeName}</span></h5>
                                                    <h5>Population:  <span>{population}</span> </h5>
                                                    <h5>Region:  <span>{region}</span></h5>
                                                    <h5>Sub Region:  <span>{subregion}</span></h5>
                                                    <h5>Capital:  <span>{capital}</span></h5>
                                                </div>
                                                <div className='country_dsection1'>
                                                        <h5>Top Level Domain:  <span>{topLevelDomain}</span></h5>
                                                        {/* <h5>Currencies:  <span>{currencies}</span></h5> }
                                                        { <h5>Currencies:  <span>{currencies.map((item)=>item.name)}</span></h5>
                                                        <h5>Languages:  <span>{languages}</span></h5>
                                                </div>
                                            </div>
                                            <div className='country_dsection2'>
                                                    <h3>Border Countries: </h3>
                                                    <div className='borders'>
                                                        {borders&&borders.map((border)=>{
                                                            return (
                                                                <ul key={border}>
                                                                    <li>{border}</li>
                                                                </ul>
                                                            )
                                                        })}
                                                    </div>
                                            </div>
                                        </div>
                                    </article>
                                ) 
                        })}

                    </section>
                </div> } */}
        </>
    )
}

export default CountryBorders
