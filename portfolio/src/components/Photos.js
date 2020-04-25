/* eslint-disable */ 
import React, { Component } from 'react';
import LightBoxModal from './LightBoxModal';

export default class Photos extends Component {
    constructor() {
        super();
        this.state = {
            activeImage: 'None',
            imgClicked: false
        }

        this.changeActivePhoto = (imageName) => {
            this.setState ({
                activeImage: imageName,
                imgClicked: true
            })
            //console.log("state changed  " + this.state.activeImage)
        }
    }

    render() {
        return (
            <div id="main-body">
                <div id="photo-col" className="photo-collection">
                    <img onClick={this.changeActivePhoto.bind(this, 'kimbap')} src="images/kimbap.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'spam_musubi')} src="images/spam_musubi.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'seaturtles')} src="images/seaturtles.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'stickers')} src="images/stickers.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'stickers2')} src="images/stickers2.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'soap')} src="images/soap.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'soap2')} src="images/soap2.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'dontdead')} src="images/dontdead.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'viet_coffee')} src="images/viet_coffee.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'chicago_airport')} src="images/chicago_airport.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'takoyaki')} src="images/takoyaki.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'tattoo')} src="images/tattoo.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'tattoo2')} src="images/tattoo2.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'tattoo3')} src="images/tattoo3.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'doggo')} src="images/doggo.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'cat')} src="images/cat.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'twitchcon')} src="images/twitchcon.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'twitchcon2')} src="images/twitchcon2.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'twitchcon3')} src="images/twitchcon3.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'turtle_collection')} src="images/turtle_collection.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'portal_cube')} src="images/portal_cube.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'ditto')} src="images/ditto.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'candle')} src="images/candle.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'kcon')} src="images/kcon.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'doggo2')} src="images/doggo2.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'doggo3')} src="images/doggo3.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'mac')} src="images/mac.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'banana_slug')} src="images/banana_slug.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'squirtle')} src="images/squirtle.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'turtles')} src="images/turtles.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'avocados')} src="images/avocados.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'boba')} src="images/boba.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'tjturtle')} src="images/tjturtle.jpg"/>
                    <img onClick={this.changeActivePhoto.bind(this, 'turtlepenguin')} src="images/turtlepenguin.jpg"/>
                </div>

               <LightBoxModal activeImage={this.state.activeImage} imgClicked={this.state.imgClicked}/>

		    </div>
        )
    }
}
