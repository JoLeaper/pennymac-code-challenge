import React from 'react';
import ListItem from './ListItem/ListItem';

function List({tvList}) {

    return (
    <ul>
        This is a List of Tv Shows
        {tvList.map((tvShow, i) => {
            return (
            <li key={i}>
                <ListItem tvShow={tvShow} />
            </li>    
            )
        })}
    </ul>
    );
}

export default List;