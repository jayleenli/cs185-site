import React, { Component } from 'react'
import config from '../config';
import Message from './Message';
import GuestBookForm from './GuestBookForm';
import 'animate.css/animate.css'
const firebase = require('firebase')

export default class GuestBook extends Component {
    //Add a state
    constructor() {
        super();
        this.state = {
        firebaseData: {},
        firstRender: true
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
        //load and update data 
        let ref = firebase.database().ref('guestBookData')
        ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({firebaseData: data})
            console.log("updated firebase state")
            if (!this.state.firstRender) {
                this.addAnimation();
            }
            else {
                this.setState ({ firstRender: false })
            }
        })

    }

    addAnimation() {
        var message = document.getElementById("firstMsg");
        console.log("running");
        if (message) {
            message.classList.add("animated");
            message.classList.add("bounceIn");

            setTimeout(function(){ 
                message.classList.remove("animated");
                message.classList.remove("bounceIn");
            }, 2000);
        } 
    }

    render() {
        const data = this.state.firebaseData;

        var msgArr = [];
        Object.keys(data).forEach(function(key) {
            if (data[key].viewable === "yes") {
                msgArr.push(data[key]);
            }
        });
        msgArr.reverse();


        const renderedMsgs = msgArr.map((msg, i) => (
            <Message key={msg.msgDateTime} avatarColor={'#'+Math.floor(Math.random()*16777215).toString(16)} msgDateTime={msg.datetime} msgName={msg.name} msgDesc={msg.desc} msgText={msg.message}></Message>
        ));

        if (renderedMsgs[0]) {
            renderedMsgs[0] = React.cloneElement(
                renderedMsgs[0], 
                { animated: true }
            );
        }

        return (
            <div id="main-body">
                <div className="contact-form animated fadeInLeft">
                    <GuestBookForm/>
                </div>
                <div className="guestbook-msgs">
                <div className="msg-box">
                    {renderedMsgs}
                </div>
                <div className="scroll-more"><center><p>Scroll to view older messages</p></center> </div>
                </div>
                
            </div>
        )
    }
}
