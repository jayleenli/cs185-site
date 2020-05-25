import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class CreateList extends Component {
    constructor() {
        super();
        this.state = {
            lastInsert: 0
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
    }

    createList () { 
        const inputData = document.getElementById("createList").value;
        console.log(inputData);

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
            document.getElementById("smalltxt").innerHTML = "List Created!"
            setTimeout(function() {
                document.getElementById("smalltxt").innerHTML = "Please enter a title for the new movie list."
            }, 1500)
        })
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
