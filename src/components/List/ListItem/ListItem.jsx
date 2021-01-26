import React from 'react';

function ListItem({tvShow}) {
    const showName = tvShow.show.name;
    return (
        <>
            <p>{showName}</p>
        </>
    );
}

export default ListItem;