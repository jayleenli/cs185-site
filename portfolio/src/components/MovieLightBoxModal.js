/* eslint-disable */ 
import React, { Component } from 'react'

export default class MovieLightBoxModal extends Component {

    render() {
        return (
            <div id="movie-lightbox-modal" className="movie-modal">
                <div className="movie-modal-content">
                    
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
                    </div>
                </div>
            </div>
        )
    }
}
