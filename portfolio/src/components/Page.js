import React, { Component } from 'react'

export default class Page extends Component {
    addStyling = () => {
        if (this.props.page.title === this.props.activePage) {
            return {backgroundColor: 'gray'}
        }
        else {
            return { backgroundColor: 'white'}
        }
    }
    render() {
        return (
            <div className='tab' style={this.addStyling()}
            onClick={this.props.changePage.bind(this, this.props.page.title)}>
                <h2>{this.props.page.title}</h2>
            </div>
        )
    }
}
