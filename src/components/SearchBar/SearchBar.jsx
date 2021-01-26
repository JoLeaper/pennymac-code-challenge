import React, {useState} from 'react';
import fetchShows from '../../services/fetchShows';

function SearchBar({setTvList}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const results = await fetchShows(searchQuery);
        console.log(results);
        // setSearchQuery(queryResults)
    }

    return (
        <div>
            <p>This is the search bar</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="e.g. The Walking Dead"/>
                <button>Search</button>
            </form>

        </div>
    );
}

export default SearchBar;