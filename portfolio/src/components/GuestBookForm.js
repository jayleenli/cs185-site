import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class GuestBookForm extends Component {
    //Add a state
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firebaseData: {},
            formErrorName: null,
            formErrorMsg: null,
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        //Check for input requirements
        const data = new FormData(event.target);

        console.log("form data")
        console.log(data);

        var formJson = {};
        data.forEach(function(value, key){
            formJson[key] = value;
        });

        console.log("form json");
        console.log(formJson);

        var setError = false
        if (formJson["name"].length <= 5 || formJson["name"].length >= 20) {
            this.setState({formErrorName: "Name must be 6-19 characters"})
            setError = true;
        }
        else {
            this.setState({formErrorName: null})
        }
        if (formJson["message"].length <= 15 || formJson["name"].length >= 500) {
            this.setState({formErrorMsg: "Message must be 16-499 characters"})
            setError = true;
        }
        else {
            this.setState({formErrorMsg: null})
        }

        //if no errors raised
        console.log(" form errors")
        console.log(this.state.formErrorName)
        console.log(this.state.formErrorMsg)
        if (!setError) {

            formJson["datetime"] = firebase.database.ServerValue.TIMESTAMP;

            //submit data to firebase
            firebase.database().ref('guestBookData').push().set(formJson);
            alert("Your message was sent!")
        }
        else {
            alert("There are issues with your submission. Please check the red text on the form.")
        }

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
                <span className="form-error" id="form-error">{this.state.formErrorName}<br/>{this.state.formErrorMsg}</span>
                
                <div className="form-input-field">
                    <label className="form-label" for="form-name">Your name:</label><br/>
                    <input type="text" id="form-name" name="name" placeholder="Enter your name" maxLength="19" required/>
                </div>
                <div className="form-input-field">                   
                    <label className="form-label" for="form-desc">Description (optional):</label><br/>
                    <input type="text" id="form-desc" name="desc" placeholder="Offer a short description of yourself" maxLength="99"/>
                </div> 
                <div className="form-input-field">
                    <label className="form-label" for="form-message">Message:</label><br/>
                    <input type="text" id="form-message" name="message" placeholder="Enter your message" maxLength="499" required/>
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
                    <input type="email" id="form-email" name="email" placeholder="Enter your email"/>
                </div>
                    <center><button className="form-submit">Submit</button></center>
            
            </form>
        )
    }
}
