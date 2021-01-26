import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css'

function List({tvList, isLoading}) {

    return (
    <div className="list-div">
        {isLoading 
        ? 
        <div className="list-loader">
            <img src='https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'/>
        </div>
        :
        <ul className="list-ul">
            {tvList.map((tvShow, i) => {
                return (
                    <li className="list-li" key={i}>
                        <ListItem tvShow={tvShow} />
                    </li>    
                )
            })}
        </ul>
        }
    </div>

    );
}

export default List;