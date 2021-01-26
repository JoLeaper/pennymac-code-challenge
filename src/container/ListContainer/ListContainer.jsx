import React from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar'

function ListContainer(props) {
    return (
        <div>
            <SearchBar />
            <List />
        </div>
    );
}

export default ListContainer;