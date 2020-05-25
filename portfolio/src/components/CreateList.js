import React, { Component } from 'react'

export default class CreateList extends Component {
    render() {
        return (
            <div className="add-create-body">
                <p>Create a new movie list to sort movies by.</p>
                <div>
                    <input className="text-input-box" type="text" id="createList" name="createList"  placeholder="List Name"/>
                    <button className="text-input-btn">Create List</button>
                    <p className="small-txt">Please enter a title for the new movie list.</p>
                </div>
		    </div>
        )
    }
}
