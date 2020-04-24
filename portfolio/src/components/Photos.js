import React, { Component } from 'react'

export default class Photos extends Component {
    render() {
        return (
            <div id="main-body">
                <div id="photo-col" className="photo-collection">
                    <img onClick="expandImage(this)" src="images/kimbap.jpg"/>
                    <img onClick="expandImage(this)" src="images/spam_musubi.jpg"/>
                    <img onClick="expandImage(this)" src="images/seaturtles.jpg"/>
                    <img onClick="expandImage(this)" src="images/stickers.jpg"/>
                    <img onClick="expandImage(this)" src="images/stickers2.jpg"/>
                    <img onClick="expandImage(this)" src="images/soap.jpg"/>
                    <img onClick="expandImage(this)" src="images/soap2.jpg"/>
                    <img onClick="expandImage(this)" src="images/dontdead.jpg"/>
                    <img onClick="expandImage(this)" src="images/viet_coffee.jpg"/>
                    <img onClick="expandImage(this)" src="images/chicago_airport.jpg"/>
                    <img onClick="expandImage(this)" src="images/takoyaki.jpg"/>
                    <img onClick="expandImage(this)" src="images/tattoo.jpg"/>
                    <img onClick="expandImage(this)" src="images/tattoo2.jpg"/>
                    <img onClick="expandImage(this)" src="images/tattoo3.jpg"/>
                    <img onClick="expandImage(this)" src="images/doggo.jpg"/>
                    <img onClick="expandImage(this)" src="images/cat.jpg"/>
                    <img onClick="expandImage(this)" src="images/twitchcon.jpg"/>
                    <img onClick="expandImage(this)" src="images/twitchcon2.jpg"/>
                    <img onClick="expandImage(this)" src="images/twitchcon3.jpg"/>
                    <img onClick="expandImage(this)" src="images/turtle_collection.jpg"/>
                    <img onClick="expandImage(this)" src="images/portal_cube.jpg"/>
                    <img onClick="expandImage(this)" src="images/ditto.jpg"/>
                    <img onClick="expandImage(this)" src="images/candle.jpg"/>
                    <img onClick="expandImage(this)" src="images/kcon.jpg"/>
                    <img onClick="expandImage(this)" src="images/doggo2.jpg"/>
                    <img onClick="expandImage(this)" src="images/doggo3.jpg"/>
                    <img onClick="expandImage(this)" src="images/mac.jpg"/>
                    <img onClick="expandImage(this)" src="images/banana_slug.jpg"/>
                    <img onClick="expandImage(this)" src="images/squirtle.jpg"/>
                    <img onClick="expandImage(this)" src="images/turtles.jpg"/>
                    <img onClick="expandImage(this)" src="images/avocados.jpg"/>
                    <img onClick="expandImage(this)" src="images/boba.jpg"/>
                    <img onClick="expandImage(this)" src="images/tjturtle.jpg"/>
                    <img onClick="expandImage(this)" src="images/turtlepenguin.jpg"/>
                </div>

                <div id="lightbox-modal" className="photo-modal">
                    <div className="modal-content">
                        <center style={{verticalAlign: 'middle'}}><img id="modal-img" src="images/spam_musubi.jpg"/>
                        <div className="caption-container">
                        <p id="caption">Hello i am a caption</p>
                        </div></center>
                    </div>
			    </div>

		    </div>
        )
    }
}
