import React, {useState, useEffect} from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar'
import mockList from '../../mocks/mockList';

function ListContainer(props) {
    const [tvList, setTvList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // temporary useEffect call in lieu of tests/calls in mock data
    useEffect(() => {
        setTvList(mockList);
    }, []);


    return (
        <div>
            <SearchBar setTvList={setTvList} setIsLoading={setIsLoading}/>
            <hr></hr>
            <List tvList={tvList} isLoading={isLoading}/>
        </div>
    );
}

export default ListContainer;