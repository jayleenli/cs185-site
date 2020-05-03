import React, { Component } from 'react'
import config from '../config';
import Message from './Message';
import GuestBookForm from './GuestBookForm';
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
    
    /*componentDidUpdate(prevProps, prevState, snapshot){
        //load data every render if changes
        //only call set state here if it is wrapped in a condition
        //if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
        if(this.state.shouldUpdate !== prevState.shouldUpdate){
            let ref = firebase.ref('guestBookData')
            ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({firebaseData: data})
            console.log("update??" + data)
            })
       }
    }*/
    

    render() {
        const test  = ["hi", "hello", "yeet"]
        const data = this.state.firebaseData;
        console.log("re render" + data);

        var msgArr = [];
        Object.keys(data).forEach(function(key) {
            msgArr.push(data[key]);
        });

        const renderedMsgs = msgArr.map((msg) => (
            <Message avatarColor={'#'+Math.floor(Math.random()*16777215).toString(16)} msgDateTime={msg.datetime} msgName={msg.name} msgDesc={msg.desc} msgText={msg.message}></Message>
        ));

        /*
        {/*test.map((s, index) => (
                    <p>
                        {s}
                    </p>
                ))}*/
        return (
            <div id="main-body">
                <div className="contact-form">
                    <GuestBookForm/>
                </div>
                <div className="msg-box">
                    {renderedMsgs}
                </div>
            </div>
        )
    }
}
