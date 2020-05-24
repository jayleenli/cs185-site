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

    showDropdown() {
        var dropdown = document.getElementById("movieDropDown");
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        }
        else {
            dropdown.style.display = "none";
        }
        
    }

    render() {
        //load all movies, we can just hardcode according to Piazza. 
        
        const movies = [ "tt0325980", "tt0087469", "tt0816692", "tt4633694", "tt1211837", "tt8946378", "tt5311514", "tt1375666"];

        const movieList = movies.map ((movie) => (
            <Movie handleClick={this.changeActiveMovie.bind(this)} key={movie} movieID={movie}></Movie>
        ));

        return (
            <div>
                <div className="movie-list-top"> 
                    <div className = "movie-list-dropdown">
                        <button onClick={this.showDropdown} className="movie-list-dropdown-btn">All &#x25BC;</button>
                        <div id="movieDropDown" className="movie-list-dropdown-cnt">
                            <a>All</a>
                            <a>Watched</a>
                            <a>WannaWatch</a>
                        </div>
                    </div>
                    <div className="movie-list-search">
                        <input className="movie-list-search-box" type="text" id="movieSearch" name="movieSearch" placeholder="Movie Title"/>
                        <button className="movie-list-search-btn">Search</button>
                    </div>

                </div>
                <br/>
                <div id="movie-list" className="movie-list">
                    {movieList}
                </div>

               <MovieLightBoxModal/>

		    </div>
        )
    }
}
