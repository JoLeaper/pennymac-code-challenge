import React, {useState} from 'react';

function SearchBar({setTvList}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchQuery)
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