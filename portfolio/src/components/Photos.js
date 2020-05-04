/* eslint-disable */ 
import React, { Component } from 'react';
import LightBoxModal from './LightBoxModal';
import images from './Images'

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
        }
    }

    render() {
        //load all images 
        const imageGallery = images.map((image, i) => (
            <img key={i} onClick={this.changeActivePhoto.bind(this, image.title)} src={image.src}/>
        ))

        return (
            <div id="main-body">
                <div id="photo-col" className="photo-collection">
                    { imageGallery }
                </div>

               <LightBoxModal activeImage={this.state.activeImage} imgClicked={this.state.imgClicked}/>

		    </div>
        )
    }
}
