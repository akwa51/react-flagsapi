import React, { useContext } from 'react'
import {IoMoonOutline} from 'react-icons/io5'
import {IoMdMoon} from 'react-icons/io'
import { initialContext } from '../context/Context'
// import {IoMoonOutline} from 'react-icons/io5'

// type ThemeType={
//   swTheme:(event: React.MouseEvent<HTMLImageElement>)=>void;
// }

const Header = () => {

  const {dark,setDark} = useContext(initialContext)
  return (
    <>
       <section className='head_section'>
            <div>
                <h1>Where in the World?</h1> 
            </div>

            <div className='theme_class' onClick={()=> setDark(!dark)}>
              {
                dark?
                <span className="icon moon-fill">
                <IoMdMoon/>
                </span>:
                <span className="icon moon-outline">
                <IoMoonOutline/>
               </span>
              }
                Dark Mode 
               
            </div>
        </section>
    </>
  )
}

export default Header
