import React,{ createContext, useState } from 'react'

type ContextType={
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const initialContext= createContext({} as ContextType)

const Context = ({children}:{children: React.ReactNode}) => {
    const [dark, setDark] = useState(false)
  return (
    <initialContext.Provider value={{dark, setDark}}>
        {children}
    </initialContext.Provider>
  )
}

export default Context
