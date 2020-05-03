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
        shouldUpdate: false
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
        //load data 
        let ref = firebase.database().ref('guestBookData')
        ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({firebaseData: data})
            console.log(data)

        })
    }
    

    render() {
        const data = this.state.firebaseData;
        console.log("re render" + data);

        var msgArr = [];
        Object.keys(data).forEach(function(key) {
            if (data[key].viewable === "yes") {
                msgArr.push(data[key]);
            }
        });

        const renderedMsgs = msgArr.map((msg) => (
            <Message avatarColor={'#'+Math.floor(Math.random()*16777215).toString(16)} msgDateTime={msg.datetime} msgName={msg.name} msgDesc={msg.desc} msgText={msg.message}></Message>
        ));

        return (
            <div id="main-body">
                <div className="contact-form animated fadeInLeft">
                    <GuestBookForm/>
                </div>
                <div className="msg-box">
                    {renderedMsgs}
                </div>
            </div>
        )
    }
}
