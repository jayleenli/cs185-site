import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class GuestBook extends Component {
    //Add a state
    constructor() {
        super();
        this.state = {
        firebaseData: {},
        shouldUpdate: false
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
        //load data on first load
        let ref = firebase.database().ref('guestBookData')
        ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({firebaseData: data})
            console.log(data)
        })
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        //load data every render if changes
        //only call set state here if it is wrapped in a condition
        //if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
        if(this.state.shouldUpdate !== prevState.shouldUpdate){
            let ref = firebase.ref('guestBookData')
            ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({firebaseData: data})
            console.log(data)
            })
        }
    }
    

    render() {
        const test  = ["hi", "hello", "yeet"]
        const data = this.state.firebaseData;
        console.log(data);
        /*
        {/*test.map((s, index) => (
                    <p>
                        {s}
                    </p>
                ))}*/
        return (
            <div id="main-body">
                <div className="contact-form">
                    <form>
                    <span className="form-title">Leave a Message!</span>
                    
                    <div className="form-input-field">
                        <label className="form-label" for="form-name">Your name:</label><br/>
                        <input type="text" id="form-name" name="form-name" placeholder="Enter your name" required/>
                    </div>
                    <div className="form-input-field">                   
                        <label className="form-label" for="form-desc">Description (optional):</label><br/>
                        <input type="text" id="form-desc" name="form-desc" placeholder="Offer a short description of yourself"/>
                    </div> 
                    <div className="form-input-field">
                        <label className="form-label" for="form-message">Message:</label><br/>
                        <input type="text" id="form-message" name="form-message" placeholder="Enter your message" required/>
                    </div>   
                    <div className="form-input-field">
                        <span className="form-label">Would you like your message to be publicly viewable? </span><br/>
                        <div className="form-radio-btns">
                            <label for="yes">
                                <input type="radio" id="form-viewable" name="form-viewable" value="yes" required/>
                                Yes</label>
                            <label for="no">
                                <input type="radio" id="form-viewable" name="form-viewable" value="no"/>
                                No
                            </label>
                        </div>
                    </div> 
                    <div className="form-input-field">
                        <label className="form-label" for="form-email">Leave your email (optional):</label><br/>
                        <input type="text" id="form-email" name="form-email" placeholder="Enter your email" required/>
                    </div>
                        <center><input className="form-submit" type="submit" value="Submit"></input></center>
                
                    </form>
                </div>
                <div className="msg-box">
                <div className="msg">
                    <div className="msg-left-div"><div className="msg-avatar">FK</div></div>
                    <div className="msg-right-div">
                        <span className="msg-time">4/20 12:21 PM</span><br/>
                        <span className="msg-name">First Last</span>
                        <span className="msg-desc">Student at UCSB</span> <br/>
                        <span className="msg-text">Hello. How are you today?</span>
                    </div>
                </div>


                </div>
            </div>
        )
    }
}
