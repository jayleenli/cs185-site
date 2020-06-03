import React, { Component } from 'react'
import './App.css';
import TabList from './components/TabList';
import Body from './components/Body';

export class App extends Component {
  //Add a state
  constructor() {
    super();
    this.state = {
      activeTab: 'Home'
    }
    this.changePage = (title) => {
      this.setState ({
        activeTab: title
      })
    }
  }

  displayTitle = () => {
    var activeTab = this.state.activeTab
    if (activeTab === 'Home') {
      return "Jayleen's Portfolio"
    } else if (activeTab === 'Photos') {
        return "Photo Gallery"
    } else if (activeTab === 'Animations') {
        return "Videos I Animated"
    } else if (activeTab === 'Games') {
        return "Games"
    } else if (activeTab === 'Guest Book') {
        return "Guest Book"
    } else if (activeTab === 'Movie List') {
      return "Movie List"
    } else if (activeTab === 'Add Movie') {
      return "Add Movie"
    } else if (activeTab === 'Create List'){
      return "Create List"
    } else {
      return "Graph"
    }
  }

  toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  render() {
    const pages = [
      { id: 1, title: "Home" },
      { id: 2, title: "Photos" },
      { id: 3, title: "Animations" },
      { id: 4, title: "Games" },
      { id: 5, title: "GuestBook" },
      { id: 6, title: "Movie List" },
      { id: 7, title: "Add Movie" },
      { id: 8, title: "Create List" },
      { id: 9, title: "Graph" }
    ];

    return (
      <div>
        <div className="nav-bar">
          <TabList pages={pages} 
          changePage={this.changePage} 
          activeTab={this.state.activeTab}/>
        </div>
        <div className="page">
          <div><h1>{this.displayTitle()}</h1><hr/></div>
          <Body activeTab={this.state.activeTab}/>
        </div>
        <div>
		      <button onClick={this.toTop.bind(this)} id="scroll-to-top" className="top-btn">Back to Top</button>
	      </div>
      </div>
    );
  }
}

export default App;
