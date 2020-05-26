import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class Movie extends Component {
    constructor() {
        super();
        this.state = {
            title: 'None',
            poster: 'None',
            director: 'None',
            ratingIMDb: 'None',
            ratingRt: 'None',
            plot: 'None',
            runtime: 'None',
            id: 'None',
            moveLists: []
        }
        
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 

        //load data, dont care if it exists or not because make sure data inserted correctly and deleted correctly
        let ref = firebase.database().ref('movies/'+this.props.movieID)
        ref.on('value', snapshot => {
            const data = snapshot.val()
            if (data !== null ) {
                var partOfLists = [];
                if (data.movieLists !== null) {
                    //part of some list
                    partOfLists = data.movieLists
                }
                this.setState({
                    title: data.Title,
                    poster: data.Poster,
                    director: data.Director,
                    ratingIMDb: data.imdbRating,
                    ratingRt: data.Ratings[1].Value,
                    plot: data.Plot,
                    runtime: data.Runtime,
                    id: data.imdbID,
                    movieLists: partOfLists
                })
            } 
            // else this movie was just deleted
        })
    }

    wasClicked = () => {
        /*//Load the lists this movie is not in
        let ref2 = firebase.database().ref('movieListPairs/' + this.props.movieID)
        ref2.once('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            
            
            //let result = inside.map(a => a.title);
            console.log(result)
            this.setState({
                firebaseListNames: result
            })
        })*/

        //disable the scroll
        // Get the current page scroll position 
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 

        var modal = document.getElementById("movie-lightbox-modal");
        modal.style.display = "flex";

        //Load the values into the modal
        var modalImg = document.getElementById("modal-img");
        modalImg.src = this.state.poster;

        document.getElementById("movie-title").innerHTML = this.state.title;
        document.getElementById("movie-rating-imdb").innerHTML = this.state.ratingIMDb;
        document.getElementById("movie-rating-rt").innerHTML = this.state.ratingRt;
        document.getElementById("movie-plot").innerHTML = this.state.plot;
        document.getElementById("movie-director").innerHTML = this.state.director;
        document.getElementById("movie-runtime").innerHTML = this.state.runtime;
        document.getElementById("modal-imdb").innerHTML = this.state.id;

        //Add listener for clicking out of modal
        if (modal) {
            modal.addEventListener("click", e=>{
                if(e.target !== e.currentTarget)
                    return;
                document.getElementById("listDropdown").style.display = "none"
                modal.style.display = "none";
                //re enable scrolling
                window.onscroll = function() {}; 
            })
        }
    }

    render() {
        return (
            <img onClick={this.wasClicked} src={this.state.poster} alt="movie poster"/>
        )
    }
}

/*    getDropdownLists() {
        const listNames = this.props.dropdownLists;
        console.log("get dropdownlists")
        //Need to check what lists this movie is not in though

        console.log(listNames)
        if (Object.keys(listNames).length != 0) {
            const listNamesRen = listNames.map((list, index) => (
                <a onClick={() => {this.changeList(index)}}>{list}</a>
            ))
            return listNamesRen
        }
    }*/