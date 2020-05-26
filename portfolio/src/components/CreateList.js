import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class CreateList extends Component {
    constructor() {
        super();
        this.state = {
            lastInsert: 0,
            firebaseListNames: []
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 

        //load list names
        let ref2 = firebase.database().ref('movieLists')
        ref2.orderByChild('title').once('value', snapshot => {
            const data = snapshot.val()
            const keys = Object.keys(data)
            var result  = []

            for(var x = 0; x < keys.length; x++) {
                result[keys[x]] = data[keys[x]].title
            }
            this.setState({
                firebaseListNames: result
            })
        })
    }

    createList () { 
        const inputData = document.getElementById("createList").value;
        var smoltxt = document.getElementById("smalltxt")
        const listNames = this.state.firebaseListNames

        //search listnames
        var found = false
        for (var x = 0; x < listNames.length; x++) {
            if (listNames[x] === inputData) {
                found = true
            }
        }
        
        if (found) {
            smoltxt.innerHTML = "That list name has already been taken, please choose another one."
            smoltxt.style.color = 'red'

        } else {
            smoltxt.style.color = 'rgb(155, 155, 155)'
            // gets the latest entry
            let ref = firebase.database().ref('movieLists')
            ref.orderByKey().limitToLast(1).once('value', snapshot => {
                const data = snapshot.val()
                var listId = Object.keys(data)[0]
                
                listId = parseInt(listId) + 1
                console.log(listId)
                //upload result to firebase, will overwrite things
                var toUpload = { "title": inputData}

                firebase.database().ref('movieLists/'+listId).set(toUpload)
                smoltxt.innerHTML = "List Created!"
                setTimeout(function() {
                    if (smoltxt != null){
                        smoltxt.innerHTML = "Please enter a title for the new movie list."
                    }
                }, 1000)
            })
        }
    }

    render() {
        return (
            <div className="add-create-body">
                <p>Create a new movie list to sort movies by.</p>
                <div>
                    <input className="text-input-box" type="text" id="createList" name="createList"  placeholder="List Name"/>
                    <button onClick={() => {this.createList()}}className="text-input-btn">Create List</button>
                    <p className="small-txt" id="smalltxt">Please enter a title for the new movie list.</p>
                </div>
		    </div>
        )
    }
}
