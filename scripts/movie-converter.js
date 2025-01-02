import { movies } from "./movies-data.js"

//This JS Module converts the movie data into HTML markup.
export const generateMoviesHTML=()=>{
    let movieHTML=''

    for (const movie of movies) {
        movieHTML+=
        `
                <article>
            <img src="${movie.poster}" alt="${movie.title}">
            <div id="movie_details">
                <h2 id="movie_title">${movie.title}</h2>
                <p id="movie_description">${movie.description}</p>
            </div>
        </article>
        `
    }

    return movieHTML
}