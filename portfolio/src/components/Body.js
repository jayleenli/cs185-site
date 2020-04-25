import React, { Component } from 'react'
import Home from './Home';
import Photos from './Photos';
import Animations from './Animations';
import Games from './Games';

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        //console.log(activeTab)
        if (activeTab === 'Home') {
            return <Home/>
        } else if (activeTab === 'Photos') {
            return <Photos/>
        } else if (activeTab === 'Animations') {
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
