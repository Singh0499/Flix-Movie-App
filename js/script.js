import { apiKey, apiURL } from "./apikey.js";

const global={
    currentPath:window.location.pathname,
};
// Fetch Data From TMBD API

async function displayPopularMovies(){
    const result = await fetchDataFromAPI('movie/popular')
    console.log(result);
}


async function fetchDataFromAPI(endpoint){
    const api_key = apiKey;
    const api_URL = apiURL;

    const response = await fetch(`${api_URL}${endpoint}?api_key=${api_key}&language=en-US`);

    const data =await response.json();
    return data;
}
fetchDataFromAPI();
// Init App

function init(){
    
    switch (global.currentPath){
        case  '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }
                            
}

document.addEventListener('DOMContentLoaded', init);