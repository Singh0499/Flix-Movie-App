import { apiKey, apiURL } from "./apikey.js";

const global={
    currentPath:window.location.pathname,
};
// Fetch Data From TMBD API

async function displayPopularMovies(){
    const { results } = await fetchDataFromAPI('movie/popular')
    results.forEach(movie=> {
        const div= document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
          ${movie.poster_path?`<img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="card-img-top"
            alt="${movie.title}"
            />`:`<img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="${movie.title}"
        />`}
        </a>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
          </p>
        </div>`;

        document.querySelector('#popular-movies').appendChild(div);
    });

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