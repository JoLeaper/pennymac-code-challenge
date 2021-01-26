import React, {useState, useEffect} from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar'
import mockList from '../../mocks/mockList';

function ListContainer(props) {
    const [tvList, setTvList] = useState([]);

    // temporary useEffect call in lieu of tests
    useEffect(() => {
        setTvList(mockList);
    }, []);


    return (
        <div>
            <SearchBar setTvList={setTvList}/>
            <hr></hr>
            <List tvList={tvList}/>
        </div>
    );
}

export default ListContainer;