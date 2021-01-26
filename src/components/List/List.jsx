import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css'

function List({tvList}) {

    return (
    <div className="list-div">
            <ul className="list-ul">
        {tvList.map((tvShow, i) => {
            return (
            <li className="list-li" key={i}>
                <ListItem tvShow={tvShow} />
            </li>    
            )
        })}
    </ul>
    </div>

    );
}

export default List;