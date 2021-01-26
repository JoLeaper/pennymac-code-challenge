const url = 'https://api.tvmaze.com/search/shows?q=';

const fetchShows = async(searchQuery) => {
    const response = await fetch(url + searchQuery);
    const shows = await response.json();
    return shows;
};

export default fetchShows;