/* eslint-disable */ 
import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class MovieLightBoxModal extends Component {
    constructor(props) {
        super(props);

        this.setState({
            allListNamesState: this.props.allListNames,
            thisMovieLists: []
        })
    }


    showDropdown() {
        console.log("clicked")
        this.getThisMovieLists()
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
        
        //remove from main movies list
        ref.remove();

        //remove from movieListPairs
        var ref2 = firebase.database().ref("movieListPairs/" + thisMovieID);
        ref2.remove();

        //remove from listMoviePairs
        //Oof because need to iterate through all the pairs
        const allLists = this.props.allListNames
        for (let [key, value] of Object.entries(allLists)) {
            var ref3 = firebase.database().ref("listMoviePairs/"+key)
            ref3.once('value', snapshot => {
                const data = snapshot.val()
                if (data !== null && thisMovieID in data) {
                    // in it, we wanna delete
                    var ref3 = firebase.database().ref("listMoviePairs/"+key+"/"+thisMovieID)
                    ref3.remove();
                    this.props.rerenderParentCallback(false);
                    //console.log(data)
                }
            })
        }

        //Also close the modal
        var modal = document.getElementById("movie-lightbox-modal");
        if (modal) {
            modal.style.display = "none";
            //re enable scrolling
            window.onscroll = function() {}; 
        }
        this.props.rerenderParentCallback(false);
    }

    getThisMovieLists() {
        let thisMovieID = document.getElementById("modal-imdb").innerHTML;
        let query = firebase.database().ref('movieListPairs/'+thisMovieID)
            query.once('value', snapshot => {
                const data = snapshot.val()
                if (data !== null) {
                    const keys = Object.keys(data)
                    console.log(keys)
                    this.setState({ 
                        thisMovieLists: keys
                    })
                }
                else {
                    console.log("null")
                    this.setState({ 
                        thisMovieLists: []
                    })
                }
            })
    }
    
    addToList(listID) {
        let thisMovieID = document.getElementById("modal-imdb").innerHTML;

        // add to movielistpairs list
        let toUpload2 = {}
        toUpload2 = true
        firebase.database().ref('movieListPairs/'+thisMovieID+'/'+listID).set(toUpload2)

        // add to listmoviepairs list
        let toUpload = {}
        toUpload = true
        firebase.database().ref('listMoviePairs/'+listID+'/'+thisMovieID).set(toUpload)

        this.getThisMovieLists()
    }

    render() {
        var listNamesRen = []
        if (this.state) {
            var inLists = this.state.thisMovieLists
            const allLists = this.props.allListNames
            var notInLists = []
            for (let [key, value] of Object.entries(allLists)) {
                if (!inLists.includes(key)) {
                    // wanna add all the lists this movie is not in
                    notInLists[key] = value
                }
            }

            listNamesRen = notInLists.map((list, listID) => (
                <a key={listID} onClick={() => {this.addToList(listID)}}>{list["title"]}</a>
            ))
        }

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
                                {listNamesRen}
                            </div>
                            <button onClick={()=>{this.deleteThisMovie()}} className="delete-movie-btn">Delete Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
