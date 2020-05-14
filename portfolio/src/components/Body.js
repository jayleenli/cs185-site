import React, { Component } from 'react'
import Home from './Home';
import Photos from './Photos';
import Animations from './Animations';
import Games from './Games';
import GuestBook from './GuestBook';
import MovieList from './MovieList';

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if (activeTab === 'Home') {
            return <Home/>
        } else if (activeTab === 'Photos') {
            return <Photos/>
        } else if (activeTab === 'Animations') {
            return <Animations/>
        } else if (activeTab === 'Games'){
            return <Games/>
        } else if (activeTab === 'GuestBook'){
            return <GuestBook/>
        } else {
            return <MovieList/>
        }
    }
    render() {
        return ( 
            this.displayContent() );
    }
}

export default Body;
