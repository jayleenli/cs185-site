/* eslint-disable */ 
import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class MovieLightBoxModal extends Component {
    showDropdown() {
        var dropdown = document.getElementById("listDropdown");
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        }
        else {
            dropdown.style.display = "none";
        }
    }

    deleteThisMovie() {
        let thisMovieID = document.getElementById("modal-imdb").innerHTML;
        var ref = firebase.database().ref("movies/" + thisMovieID);
        console.log("deleting")
        //Also need to remove this from all lists.
        ref.remove();
        //Also close the modal
        var modal = document.getElementById("movie-lightbox-modal");
        if (modal) {
            modal.style.display = "none";
            //re enable scrolling
            window.onscroll = function() {}; 
        }
        this.props.rerenderParentCallback();
    }


    render() {
        return (
            <div id="movie-lightbox-modal" className="movie-modal">
                <div className="movie-modal-content">
                    <a id="modal-imdb"></a>
                    <img id="modal-img" alt="lightbox photo"/>
                    <div className="movie-info-container">
                        <h2 id="movie-title"></h2>
                        <div className="movie-modal-ratings-container">
                            <div className="movie-modal-rating-rt"> <a>Rotten 🍅 </a><a id="movie-rating-rt"></a></div>
                            <div className="movie-modal-rating"> <a>Imdb Score </a><a id="movie-rating-imdb"></a></div>
                        </div>
                        <p id="movie-plot"></p>

                        <div className="movie-modal-runtime"><b>Runtime: </b><a id="movie-runtime"></a> </div><br/>
                        <b>Directed By: </b><a id="movie-director"></a>

                        <div className = "movie-modal-bottom">
                            <button onClick={()=>{this.showDropdown()}} className="add-to-list-btn">Add to list &#x25BC;</button>
                            <div id="listDropdown" className="add-to-list-cnt">
                            </div>
                            <button onClick={()=>{this.deleteThisMovie()}} className="delete-movie-btn">Delete Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
