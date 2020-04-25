import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

export class App extends Component {
  //Add a state
  constructor() {
    super();
    this.state = {
      activePage: 'Home'
    }
    this.changePage = (title) => {
      this.setState ({
        activePage: title
      })
    }
  }

  displayTitle = () => {
    var activePage = this.state.activePage
    if (activePage === 'Home') {
      return "Jayleen's Portfolio"
    } else if (activePage === 'Photos') {
        return 'Photo Gallery'
    } else if (activePage === 'Animations') {
        return 'Videos I Animated'
    } else {
        return 'Games'
    }
  }

  toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  render() {
    const pages = [
      {
        id: 1,
        title: "Home"
      },
      {
        id: 2,
        title: "Photos"
      },
      {
        id: 3,
        title: "Animations"
      },
      {
        id: 4,
        title: "Games"
      }
    ];

    return (
      <div>
        <div className="nav-bar">
          <NavBar pages={pages} 
          changePage={this.changePage} 
          activePage={this.state.activePage}/>
        </div>
        <div className="page">
          <div><h1>{this.displayTitle()}</h1><hr/></div>
          <Body activePage={this.state.activePage}/>
        </div>
        <div>
		      <button onClick={this.toTop.bind(this)} id="scroll-to-top" className="top-btn">Back to Top</button>
	      </div>
      </div>
    );
  }
}

export default App;
