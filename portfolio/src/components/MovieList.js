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
            firebaseAllMovieData: [],
            lastKeyLoaded: 'None',
            page: 1,
            numMovies: null,
            firebaseListNames: {},
            searchedKey: 'None',
            currentList: 'All',
            currentListName: 'All'
        }
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);

        this.changeActiveMovie = (movieName) => {
            console.log("changed active state")
            this.setState ({
                activeMovie: movieName,
                movieClicked: true
            })
        }
    }

    componentDidUpdate() {
        console.log("component updated", this.state.numMovies)
        if (this.state.numMovies != null) {
            //check to see if need to have load more button shown or hidden
            //console.log("HELLO")
            //console.log(this.state.page*8)
            //console.log(this.state.numMovies)
            if (this.state.page*8 >= this.state.numMovies) {
                //don't need to show load more
                document.getElementById("loadMore").style.display = 'none';
            }
            else {
                document.getElementById("loadMore").style.display = 'block';
            }
        }
        if (this.state.searchedKey != 'None') {
            document.getElementById("loadMore").style.display = 'none';
        } 

    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
        let ref1 = firebase.database().ref('movies')
        ref1.once('value', snapshot => {
            //num movies for all page for first load
            this.setState({
                numMovies: snapshot.numChildren()
            })
        })

        //load and update data only first 8
        let ref = firebase.database().ref('movies').orderByKey().limitToFirst(8)
        ref.once('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            
            const keys = Object.keys(data)

            this.setState({
                firebaseAllMovieData: keys,
                lastKeyLoaded: keys[keys.length-1],
                page: 1
            })
        })

        //load list names
        let ref2 = firebase.database().ref('movieLists')
        ref2.orderByChild('title').once('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            
            //const inside = Object.values(data)
            const keys = Object.keys(data)
            var result  = []

            for(var x = 0; x < keys.length; x++) {
                result[keys[x]] = data[keys[x]].title
            }
            //let result = inside.map(a => a.title);
            console.log(result)
            this.setState({
                firebaseListNames: result
            })
        })
    }

    rerenderParentCallback (forceAll) {
        console.log("forced update")
        //Because something got deleted, need to rerun the movielist.
        
        if (this.state.currentList === "All" || forceAll === true) {
            let ref1 = firebase.database().ref('movies')
            ref1.once('value', snapshot => {
                //const data = snapshot.numChildren()
                this.setState({
                    numMovies: snapshot.numChildren()
                })
            })

            //load and update data only first 8
            let ref = firebase.database().ref('movies').orderByKey().limitToFirst(8)
            ref.once('value', snapshot => {
                const data = snapshot.val()
                console.log(data)
                
                const keys = Object.keys(data)

                this.setState({
                    firebaseAllMovieData: keys,
                    lastKeyLoaded: keys[keys.length-1],
                    page: 1
                })
            })
        }
        else {
            //need this for lsit?
        }
        this.forceUpdate();
        
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

    getDropdownLists() {
        const listNames = this.state.firebaseListNames;
        console.log("get dropdownlists")
        console.log(listNames)
        if (Object.keys(listNames).length != 0) {
            const listNamesRen = listNames.map((list, index) => (
                <a onClick={() => {this.changeList(index)}}>{list}</a>
            ))
            listNamesRen.unshift(<a onClick={() => {this.changeList("All")}}>All</a>)
            return listNamesRen
        }
    }

    changeList(listID) {
        //load and update data only first 8
        //console.log("LISTID" + listID)
        document.getElementById("movieDropDown").style.display = 'none';

        if (listID === 'All') {
            this.setState({
                currentList: listID,
                currentListName: 'All'
            })
            //this.forceUpdate();
            this.rerenderParentCallback(true)
            //can do this because we were gonna run that same logic anyway
        }
        else {
            let query = firebase.database().ref('listMoviePairs/'+listID).orderByKey().limitToFirst(8)
            query.once('value', snapshot => {
                const data = snapshot.val()
                const keys = Object.keys(data)
                
                //Also do a load for the load more button
                let ref1 = firebase.database().ref('listMoviePairs/'+listID)
                ref1.once('value', snapshot => {
                    this.setState({
                        numMovies: snapshot.numChildren()
                    })
                })
                
                console.log("new list loaded" + keys)
                const listNames = this.state.firebaseListNames;
                this.setState({
                    firebaseAllMovieData: keys,
                    lastKeyLoaded: keys[keys.length-1],
                    page: 1,
                    currentList: listID,
                    currentListName: listNames[listID]
                })
            })
        }
    }

    searchMovies() {
        var searchBtn = document.getElementById("searchMovieBtn")
        if (searchBtn.innerHTML === "Clear") {
            document.getElementById("movieSearch").value = "";
            document.getElementById("search-small-txt").style.display = "none";
            searchBtn.innerHTML = "Search"
            this.setState({
                searchedKey: 'None'
            })
        }
        else {
            var searchInput = document.getElementById("movieSearch").value;
            var found = false
            let ref = firebase.database().ref('movies')
            ref.once('value', snapshot => {
                const data = snapshot.val()

                for (let [key, value] of Object.entries(data)) {
                    if (value["Title"].toLowerCase() === searchInput.toLowerCase()) {
                        found = true
                        console.log("found" + key)
                        
                        this.setState({
                            searchedKey: key
                        })
                    }

                }
                if (found == false) {
                    document.getElementById("search-small-txt").style.display = "block"
                }
                else {
                    document.getElementById("search-small-txt").style.display = "none"
                }
                document.getElementById("searchMovieBtn").innerHTML = "Clear"
            })
        }
    }

    getAllMovieIDs() {
        return this.state.firebaseAllMovieData
    }

    loadMovies () {
        console.log("load movies called")
        if (this.state.searchedKey != 'None') {
            return <Movie handleClick={this.changeActiveMovie.bind(this)} movieID={this.state.searchedKey}></Movie>
        }
        else {
            const movies = this.getAllMovieIDs();
            console.log("MOVIES")
            console.log(movies)
            
            const movieList = movies.map ((movie) => (
                <Movie handleClick={this.changeActiveMovie.bind(this)} key={movie} movieID={movie}></Movie>
            ));
            
            return movieList
        }

    }

    loadMore() {
        console.log("load more clicked")
        var currPage = this.state.page
        currPage = currPage+1
        console.log(currPage)

        //load more
        var numLimit = 9 //9 because it starts from last key 
        var start = (this.state.lastKeyLoaded)

        var pastFireBaseData = this.state.firebaseAllMovieData //array of keys

        if (this.state.currentList === 'All') {
            let ref = firebase.database().ref('movies').orderByKey().limitToFirst(numLimit).startAt(start);
            ref.once('value', snapshot => {
                const data = snapshot.val()
                //console.log(data)
                
                const keys = Object.keys(data)

                var newFireBaseData = pastFireBaseData
                for (let key of Object.keys(data)) {
                    if (!pastFireBaseData.includes(key)) {
                        newFireBaseData.push(key)
                    }
                }

                //console.log(newFireBaseData)
                this.setState({
                    firebaseAllMovieData: newFireBaseData,
                    lastKeyLoaded: keys[keys.length-1],
                    page: currPage
                })
            })
        }
        else {
            //load more for list
            let query = firebase.database().ref('listMoviePairs/'+this.state.currentList).orderByKey().limitToFirst(numLimit).startAt(start)
            query.once('value', snapshot => {
                const data = snapshot.val()
                const keys = Object.keys(data)

                var newFireBaseData = pastFireBaseData
                for (let key of Object.keys(data)) {
                    if (!pastFireBaseData.includes(key)) {
                        newFireBaseData.push(key)
                    }
                }
                
                const listNames = this.state.firebaseListNames;
                this.setState({
                    firebaseAllMovieData: newFireBaseData,
                    lastKeyLoaded: keys[keys.length-1],
                    page: currPage
                })
            })
        }
        

    }

    render() {

        return (
            <div className="movie-list-container">
                <div className="movie-list-top"> 
                    <div className = "movie-list-dropdown">
                        <button onClick={()=>{this.showDropdown()}} className="movie-list-dropdown-btn">{this.state.currentListName} &#x25BC;</button>
                        <div id="movieDropDown" className="movie-list-dropdown-cnt">
                            {this.getDropdownLists()}
                        </div>
                    </div>
                    <div className="movie-list-search">
                        <input className="movie-list-search-box" type="text" id="movieSearch" name="movieSearch" placeholder="Movie Title"/>
                        <button id="searchMovieBtn" onClick={() => {this.searchMovies()}} className="movie-list-search-btn">Search</button>
                        <p className="small-txt-search" id="search-small-txt">Not found.</p>
                    </div>
                    

                </div>
                <br/>
                <div id="movie-list" className="movie-list">
                    {this.loadMovies()}
                </div>
                <center><button id="loadMore" onClick={this.loadMore.bind(this)} className="movie-list-load-more">Load More</button></center>

               <MovieLightBoxModal rerenderParentCallback={this.rerenderParentCallback} />

		    </div>
        )
    }
}
