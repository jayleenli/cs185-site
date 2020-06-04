import React, { Component } from 'react'
import Home from './Home';
import Photos from './Photos';
import Animations from './Animations';
import Games from './Games';
import GuestBook from './GuestBook';
import MovieList from './MovieList';
import CreateList from './CreateList';
import AddMovie from './AddMovie';
import Graph from './Graph';

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
        } else if (activeTab === 'Movie List') {
            return <MovieList/>
        } else if (activeTab === 'Add Movie') {
            return <AddMovie/>
        } else if (activeTab === 'Create List'){
            return <CreateList/>
        } else {
            return <Graph/>
        }
    }
    render() {
        return ( 
            this.displayContent() );
    }
}

export default Body;
