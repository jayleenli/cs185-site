/* eslint-disable */ 
import React, { Component } from 'react'

export default class Page extends Component {
    addActiveClass = () => {
        if (this.props.page.title === this.props.activePage) {
            return 'active'
        }
    }

    render() {
        const pageTitle = this.props.page.title;

        return (
            <li onClick={this.props.changePage.bind(this, this.props.page.title)} className={this.addActiveClass()}><a><span>{pageTitle}</span></a></li>
        )
    }
}