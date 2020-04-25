import React, { Component } from 'react'
import Page from './Page';

export class NavBar extends Component {
    render() {
        /* how to do a console log in jsx: { console.log(this.props)} */
        //console.log(this.props)
        const renderedPages = this.props.pages.map((page) => (
            <Page page={page} changePage={this.props.changePage} activePage={this.props.activePage}/>
        ))
        return (
            <div id="nav-bar-div" className="nav-bar">
			<ul id="nav-bar-list">
                {renderedPages}
            </ul>
	        </div>);
    }
}

export default NavBar;