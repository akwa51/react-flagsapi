import React from 'react'

const Search = () => {
  return (
    <div>
      <section className='searchbar'>
        <div className='search_filter'>
            <i className='isearch'></i>
            <input type="search" name="filter" id="input_filter" placeholder="Search for a Country"/>
        </div>

        <div className='region_filter'>
            <select name='select' id='select' className='select_region'>
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
