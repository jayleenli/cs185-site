import React, { Component } from 'react'

export default class AddMovie extends Component {
    render() {
        return (
            <div className="add-create-body ">
                <p>Adds a movie to the movie list!</p>
                <div className="add-movie">
                    <input className="text-input-box" type="text" id="movieSearch" name="movieSearch" maxLength="10" placeholder="Movie ImdbID"/>
                    <button className="text-input-btn">Add Movie</button>
                    <p className="small-txt">Please give the imdbID of the movie from the imdb site.</p>
                </div>
		    </div>
        )
    }
}
