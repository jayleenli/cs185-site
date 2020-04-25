import React, { Component } from 'react'
import Page from './Page';

export class TabList extends Component {
    render() {
        /* how to do a console log in jsx: { console.log(this.props)} */
        //console.log(this.props)
        const renderedPages = this.props.pages.map((page) => (
            <Page page={page} changePage={this.props.changePage} activeTab={this.props.activeTab}/>
        ))
        return (
            <div id="nav-bar-div" className="nav-bar">
			<ul id="nav-bar-list">
                {renderedPages}
            </ul>
	        </div>);
    }
}

export default TabList;