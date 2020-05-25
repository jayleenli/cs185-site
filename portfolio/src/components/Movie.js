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
            runtime: 'None'
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
            this.setState({
                title: data.Title,
                poster: data.Poster,
                director: data.Director,
                ratingIMDb: data.imdbRating,
                ratingRt: data.Ratings[1].Value,
                plot: data.Plot,
                runtime: data.Runtime
            })
        })
    }

    wasClicked = () => {
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

        //Add listener for clicking out of modal
        if (modal) {
            modal.addEventListener("click", e=>{
                if(e.target !== e.currentTarget)
                    return;
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
