import React, { Component } from 'react'

export default class AnimationsTile extends Component {
    render() {
        return (
            <div className="tile">
                <iframe className="tile__vid" src={this.props.videoLink} width="400" height="300" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}
