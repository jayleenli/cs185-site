import React, { Component } from 'react'

export default class Message extends Component {
    getId() {
        if (this.props.animated) {
            return "firstMsg"
        }
        else return "notFirst"
    }

    render() {
        var msgDateTime = new Date(this.props.msgDateTime);
        msgDateTime = msgDateTime.toString();
        var msgDateTimeArr = msgDateTime.split(" ");
        //we only want date time and timezone displayed
        msgDateTime = msgDateTimeArr[1] + " " + msgDateTimeArr[2] + " " 
        + msgDateTimeArr[3] + " " + msgDateTimeArr[4] + " " + msgDateTimeArr[5];

        const msgName = this.props.msgName;
        var initialsArr = msgName.split(" ");
        var initials;
        if (initialsArr.length === 1) {
            initials = initialsArr[0].charAt(0).toUpperCase();
        }
        else {
            initials = initialsArr[0].charAt(0).toUpperCase() + initialsArr[1].charAt(0).toUpperCase();
        }

        const msgDesc = this.props.msgDesc;
        const msgText = this.props.msgText;

        //random color for avatar
        const avatarColor = this.props.avatarColor;

        return (
            <div className="msg" id={this.getId()}>
                    <div className="msg-left-div"><div className="msg-avatar" style={{backgroundColor: avatarColor}}>{initials}</div></div>
                    <div className="msg-right-div">
                        <span className="msg-date-time">{msgDateTime}</span><br/>
                        <span className="msg-name">{msgName}</span>
                        <span className="msg-desc">{msgDesc}</span> <br/>
                        <span className="msg-text">{msgText}</span>
                    </div>
            </div>
        )
    }
}
