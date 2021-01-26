const url = 'https://api.tvmaze.com/search/shows?q=';

const fetchShows = async(searchQuery) => {
    try {
        const response = await fetch(url + searchQuery);
        const shows = await response.json();
        return shows;
    } catch(err) {
        alert(err)
    }

};

export default fetchShows;