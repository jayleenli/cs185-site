import React, { Component } from 'react'
import MovieLightBoxModal from './MovieLightBoxModal'
import Movie from './Movie'

export default class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            activeMovie: 'None',
            movieClicked: false
        }

        this.changeActiveMovie = (movieName) => {
            console.log("changed active state")
            this.setState ({
                activeMovie: movieName,
                movieClicked: true
            })
        }
    }

    render() {
        //load all movies, we can just hardcode according to Piazza. 
        
        const movies = [ "tt0325980", "tt0087469", "tt0816692", "tt4633694", "tt1211837", "tt8946378", "tt5311514", "tt1375666"];

        const movieList = movies.map ((movie) => (
            <Movie handleClick={this.changeActiveMovie.bind(this)} key={movie} movieID={movie}></Movie>
        ));

        return (
            <div id="main-body">
                <div id="movie-list" className="movie-list">
                    {movieList}
                </div>

               <MovieLightBoxModal/>

		    </div>
        )
    }
}
