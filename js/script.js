const global={
    currentPath:window.location.pathname,
};
// Fetch Data From TMBD API

async function fetchDataFromAPI(endpoint){
    pass   
}
fetchDataFromAPI();
// Init App

function init(){
    
    switch (global.currentPath){
        case  '/':
            case '/index.html':
                console.log('Home');
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