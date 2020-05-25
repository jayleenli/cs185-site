import React, { Component } from 'react'
import MovieLightBoxModal from './MovieLightBoxModal'
import Movie from './Movie'
import config from '../config';
const firebase = require('firebase')

export default class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            activeMovie: 'None',
            movieClicked: false,
            firebaseAllMovieData: {},
            lastKeyLoaded: 'None',
            page: 1
        }

        this.changeActiveMovie = (movieName) => {
            console.log("changed active state")
            this.setState ({
                activeMovie: movieName,
                movieClicked: true
            })
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 

        //load and update data only first 8
        let ref = firebase.database().ref('movies').orderByKey().limitToFirst(8)
        ref.on('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            
            const keys = Object.keys(data)

            console.log(keys[7])
            this.setState({
                firebaseAllMovieData: data,
                lastKeyLoaded: keys[7],
                page: 1
            })
        })
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

    getAllMovieIDs() {
        return Object.keys(this.state.firebaseAllMovieData)
    }

    loadMovies () {
        console.log("load movies called")
        

        const movies = this.getAllMovieIDs();
        //console.log(movies)

        const movieList = movies.map ((movie) => (
            <Movie handleClick={this.changeActiveMovie.bind(this)} key={movie} movieID={movie}></Movie>
        ));
        
        return movieList
    }

    loadMore() {
        console.log("load more clicked")
        var currPage = this.state.page
        currPage = currPage+1
        console.log(currPage)

        //load more
        var numLimit = 8
        //console.log(this.state)
        var start = (this.state.lastKeyLoaded)
        console.log(start)

        var pastFireBaseData = this.state.firebaseAllMovieData

        let ref = firebase.database().ref('movies').orderByKey().limitToFirst(numLimit).startAt(start);
        ref.on('value', snapshot => {
            const data = snapshot.val()
            //console.log(data)
            
            const keys = Object.keys(data)

            var newFireBaseData = pastFireBaseData
            for (let [key, value] of Object.entries(data)) {
                newFireBaseData[key] = value
            }

            //console.log(newFireBaseData)
            this.setState({
                firebaseAllMovieData: newFireBaseData,
                lastKeyLoaded: keys[numLimit-1],
                page: currPage
            })
        })

    }

    render() {
        //load all movies, we can just hardcode according to Piazza. 

        return (
            <div className="movie-list-container">
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
                    {this.loadMovies()}
                </div>
                <center><button id="loadMore" onClick={this.loadMore.bind(this)} className="movie-list-load-more">Load More</button></center>

               <MovieLightBoxModal/>

		    </div>
        )
    }
}
