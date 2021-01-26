import React from 'react';
import ListItem from './ListItem/ListItem';

function List({tvList}) {
    console.log(tvList);
    return (
        <div>
            This is the List of Characters
            <ListItem />
        </div>
    );
}

export default List;