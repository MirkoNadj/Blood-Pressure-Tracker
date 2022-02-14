import React, {FC} from 'react';


interface SearchProps {
    setSearch: (value: string) => void
    search: (string | undefined)
  }

const Search:FC<SearchProps> = ({search, setSearch}) => {
    const updateSearch = (e:any) => {
        setSearch(e.target.value);
        console.log('search term ',search)
    }

    return (
        <div className='searchContainer'>
            <div className='searchInputs'>
                <input 
                    type="text"
                    placeholder="Search"
                    onChange={updateSearch}
                    value={search} />
                <button onClick={()=>{console.log('Searching')}}>Search</button>
            </div>
        </div>
    )
}

export default Search;