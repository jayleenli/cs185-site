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
        <div>
          <Body activePage={this.state.activePage}/>
        </div>
        
      </div>
    );
  }
}

export default App;
