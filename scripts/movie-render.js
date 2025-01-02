//logic to render the movie cards to the DOM.
export const renderMoviesToDOM=(movieHTML)=>{ //this fn accepts parameter movieHTML
    const movieList=document.getElementById('movie-list')//ALT: document.querySelector("#movie-list")

    if (movieList){
        movieList.innerHTML=movieHTML
    }else{ 
        console.error('Could not find element with id "movie-list"')
    }
}
