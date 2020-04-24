import React, { Component } from 'react'
import Home from './Home';
import Photos from './Photos';
import Animations from './Animations';
import Games from './Games';

export class Body extends Component {
    displayContent = () => {
        var activePage = this.props.activePage
        console.log(activePage)
        if (activePage === 'Home') {
            return <Home/>
        } else if (activePage === 'Photos') {
            return <Photos/>
        } else if (activePage === 'Animations') {
            return <Animations/>
        } else {
            return <Games/>
        }
    }
    render() {
        return ( 
            this.displayContent() );
    }
}

export default Body;
