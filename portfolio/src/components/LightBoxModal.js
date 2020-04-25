/* eslint-disable */ 
import React, { Component } from 'react'
import images from './Images'

export default class LightBoxModal extends Component {
    makeVisible = () => {
        if (this.props.imgClicked) {
            //console.log("imgClicked");
            var modal = document.getElementById("lightbox-modal");
            modal.style.display = "flex";
        }
    }

    addClickListener = () => {
        var modal = document.getElementById("lightbox-modal");
        if (modal) {
            modal.addEventListener("click", e=>{
                //console.log(e.target);
                //console.log(e.currentTarget);
                if(e.target !== e.currentTarget)
                    return;
                modal.style.display = "none";
            })
        }
    }
    render() {
        const thisImage = images.find((image) => image.title === this.props.activeImage)
        var thisImageSrc = null;
        var thisImageDesc = null;
        //console.log("this image" )
        //console.log(thisImage)
        if (thisImage) {
            thisImageSrc = thisImage.src
            thisImageDesc = thisImage.description
        }
        if (!thisImageSrc) {
            //default first image
            thisImageSrc = images[0].src
            thisImageDesc = images[0].description
        }
        //console.log(images)
        //console.log("active page " + this.props.activeImage)
        this.makeVisible();
        this.addClickListener();
        return (
            <div id="lightbox-modal" className="photo-modal">
                <div className="modal-content">
                    <center style={{verticalAlign: 'middle'}}><img id="modal-img" src={thisImageSrc} alt="lightbox photo"/>
                    <div className="caption-container">
        <p id="caption">{thisImageDesc}</p>
                    </div></center>
                </div>
            </div>
        )
    }
}
