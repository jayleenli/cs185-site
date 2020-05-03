import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class GuestBookForm extends Component {
    //Add a state
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        firebaseData: {}
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        const data = new FormData(event.target);

        var formJson = {};
        data.forEach(function(value, key){
            formJson[key] = value;
        });
        formJson["datetime"] = firebase.database.ServerValue.TIMESTAMP;

        //submit data to firebase
        firebase.database().ref('guestBookData').push().set(formJson);
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span className="form-title">Leave a Message!</span>
                
                <div className="form-input-field">
                    <label className="form-label" for="form-name">Your name:</label><br/>
                    <input type="text" id="form-name" name="name" placeholder="Enter your name" required/>
                </div>
                <div className="form-input-field">                   
                    <label className="form-label" for="form-desc">Description (optional):</label><br/>
                    <input type="text" id="form-desc" name="desc" placeholder="Offer a short description of yourself"/>
                </div> 
                <div className="form-input-field">
                    <label className="form-label" for="form-message">Message:</label><br/>
                    <input type="text" id="form-message" name="message" placeholder="Enter your message" required/>
                </div>   
                <div className="form-input-field">
                    <span className="form-label">Would you like your message to be publicly viewable? </span><br/>
                    <div className="form-radio-btns">
                        <label for="yes">
                            <input type="radio" id="form-viewable" name="viewable" value="yes" required/>
                            Yes</label>
                        <label for="no">
                            <input type="radio" id="form-viewable" name="viewable" value="no"/>
                            No
                        </label>
                    </div>
                </div> 
                <div className="form-input-field">
                    <label className="form-label" for="form-email">Leave your email (optional):</label><br/>
                    <input type="text" id="form-email" name="email" placeholder="Enter your email"/>
                </div>
                    <center><button className="form-submit">Submit</button></center>
            
            </form>
        )
    }
}
