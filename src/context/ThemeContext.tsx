// import React,{ createContext, useState, useEffect} from 'react'
import React,{ createContext, useState} from 'react'
// import { countryDetail } from '../types/CountryTypes'
import { ThemeContextType } from '../types/ContextType';

// const url='https://restcountries.com/v2/all';



export const initialContext= createContext({} as ThemeContextType)

  const Context = ({children}:{children: React.ReactNode}) => {
      const [dark, setDark] = useState(false)
      // const [countriesData,setCountriesData]=useState<countryDetail[]>([]);


      // useEffect(()=>{

      //     const fetchAllCountriesData=async()=>{
      //       try {
      //           const response=await fetch(url);
      //           if(!response.ok) throw new Error('Error!!...Connection Not Established!')
      //           const data =await response.json();
      //           setCountriesData(data);
                
      //       } catch (error:any) {

      //       } 
      //   }

      //   fetchAllCountriesData()

      // },[])




  return (
    <initialContext.Provider value={{dark, setDark}}>
        {children}
    </initialContext.Provider>
  )
}

export default Context
