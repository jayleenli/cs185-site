import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')
const axios = require('axios').default;

export default class AddMovie extends Component {
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
    }

    addMovieEvent () { 
        const inputData = document.getElementById("addMovieBox").value;
        console.log(inputData);

        //Do axios req
        axios.get('https://www.omdbapi.com/?apikey=d92ce2fd&i=' + inputData)
        .then(function (response) {
            //upload result to firebase, will overwrite things
            var toUpload = response.data
            //toUpload["movieLists"] = []
            //console.log(toUpload)
            firebase.database().ref('movies/'+response.data.imdbID).set(toUpload)
            console.log("uploaded to firebase")
            document.getElementById("smalltxt").innerHTML = "Movie Added!"
            setTimeout(function() {
                if (document.getElementById("smalltxt") != null){
                    document.getElementById("smalltxt").innerHTML = "Please give the imdbID of the movie from the imdb site."
                }
            }, 1000)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="add-create-body ">
                <p>Adds a movie to the movie list!</p>
                <div className="add-movie">
                    <input className="text-input-box" type="text" id="addMovieBox" name="addMovieBox" maxLength="10" placeholder="Movie ImdbID"/>
                    <button onClick={() => {this.addMovieEvent()}} className="text-input-btn">Add Movie</button>
                    <p className="small-txt" id="smalltxt">Please give the imdbID of the movie from the imdb site.</p>
                </div>
		    </div>
        )
    }
}
