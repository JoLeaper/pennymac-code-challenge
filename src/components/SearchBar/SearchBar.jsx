import React, {useState} from 'react';
import fetchShows from '../../services/fetchShows';
import './SearchBar.css';

function SearchBar({setTvList, setIsLoading}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        const results = await fetchShows(searchQuery);
        setTvList(results);
        setIsLoading(false);
    }

    return (
        <div className="search-box">
            <form onSubmit={e => handleSubmit(e)}>
                <input className="search-text" onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="e.g. The Walking Dead"/>
                <input type="submit" value="Submit" className="search-btn" />
            </form>
        </div>
    );
}

export default SearchBar;