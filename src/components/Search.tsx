import React from 'react'

const Search = () => {
  return (
    <div>
      <section className='findBar'>
        <div className='find_input'>
            <i className='iSearch'></i>
            <input type="search" name="filter" id="filter" placeholder="Search for a Country"/>
        </div>

        <div className='region_option'>
            <select name='select' id='select' className='find_option'>
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
      </section>
    </div>
  )
}

export default Search
