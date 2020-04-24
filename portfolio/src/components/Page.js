import React, { Component } from 'react'

export default class Page extends Component {
    addActiveClass = () => {
        if (this.props.page.title === this.props.activePage) {
            return 'active'
        }
    }

    render() {
        const pageTitle = this.props.page.title;
        const pageLink = pageTitle + '.html';

        return (
            <li onClick={this.props.changePage.bind(this, this.props.page.title)} className={this.addActiveClass()}><a><span>{pageTitle}</span></a></li>
            /*<div className='tab' style={this.addStyling()}
            onClick={this.props.changePage.bind(this, this.props.page.title)}>
                <h2>{this.props.page.title}</h2>
            </div>*/
        )
    }
}