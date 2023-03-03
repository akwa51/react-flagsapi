import {HiSearch} from 'react-icons/hi'


type inputTS={
  value:string,
  countrySearch:(str:string)=>void,
  oregion:string,
  regionSearch:(str:string)=>void
}


const Search = ({countrySearch,value,oregion,regionSearch}:inputTS) => {
 
  return (
    <div >
      <section className='searchbar' >
        <div className='search_filter'>
            <HiSearch className='isearch'/>
            <input type="search" name="filter" id="input_filter" value={value} placeholder="Search for a Country ...."
            onChange={(e)=>countrySearch(e.target.value)}/>
        </div>

        <div className='region_filter'>
            <select name='select' id='select' className='select_region' value={oregion} onChange={e=>regionSearch(e.target.value)}>
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
