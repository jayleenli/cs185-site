import React, { Component } from 'react'

export default class GameContent extends Component {
    render() {
        return (
            <div className="game-content">
				<div className="game-section">
					<div className="game-img-section">
                        <img className="game-img" src={this.props.imageSrc} alt={this.props.alt}/>
                    </div>
                    <div className="game-content">
                        <h2>{this.props.header}</h2>
                        <p>{this.props.desc}</p> 
                        <div>Hours: {this.props.hours}</div>
                    </div> 
				</div>
				<hr/>
			</div>
        )
    }
}
