import $ from 'jquery';
import axios from 'axios';

function getData(){
    axios.get('http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json').then((resp) => {
        console.log('Response from server: ', resp);
        displayData(resp.data.feed.entry);
    })
    .catch((error) => {
        console.log("error from axios request:", error)
    })
}

function displayData(movieArray){
    const movieHTML = movieArray.map((movie, index) => {
        console.log('Movie: ', movie['im:image'][0].label)

        const container = $("<div>")
        const h1 = $(`<h1>${movie['im:name'].label}</h1>`)
        const image = $(`<img src="${movie['im:image'][2].label}">`);
        
        $("#root").append(h1,image)
        return container
    })
    $("#root").append(movieHTML)
}

getData()