import React, { Component } from 'react'
const axios = require('axios').default;

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

    wasClicked = () => {
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
            })
        }
    }

    componentDidMount () {
        axios.get('https://www.omdbapi.com/?apikey=d92ce2fd&i=' + this.props.movieID)
        .then((response) => 
            this.setState({
                title: response.data.Title,
                poster: response.data.Poster,
                director: response.data.Director,
                ratingIMDb: response.data.imdbRating,
                ratingRt: response.data.Ratings[1].Value,
                plot: response.data.Plot,
                runtime: response.data.Runtime
            })
        )
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <img onClick={this.wasClicked} src={this.state.poster} alt="movie poster"/>
        )
    }
}
