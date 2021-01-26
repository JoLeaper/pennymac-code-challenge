import React from 'react';

function ListItem({tvShow}) {
    const showName = tvShow.show.name;
    const showImage = tvShow.show.image ? tvShow.show.image.medium : 'https://placekitten.com/210/295'
    return (
        <>
            <img src={showImage} />
            <p className="list-p">{showName}</p>
        </>
    );
}

export default ListItem;