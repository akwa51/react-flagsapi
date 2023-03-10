import { countryDetails } from "./CountryTypes";

type ThemeContextType={
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

type DataContextType={
    countriesData:countryDetails[];
    setCountriesData:React.Dispatch<React.SetStateAction<countryDetails[]>>
}

export type {ThemeContextType,DataContextType};