import React, { Component } from 'react';
import Header from './components/Header'
import Setup from './components/Setup'
import Game from './components/Game'
import Winner from './components/Winner'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor () {
    super() 
    this.state = {
      teams: [],
      isSetup: true,
    }
    this.createBracket = this.createBracket.bind(this)
  }

  createBracket (teamsList) {
    this.toggleInSetup()
    axios.post('/teams', teamsList)
    .then((res) => this.setState({teams: res.data}))
    .catch( err => console.log('teams did not post'))
  }

  toggleInSetup () {
    this.setState({isSetup: !this.state.isSetup})
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Setup createBracket={this.createBracket} inSetup={this.state.isSetup}/>
        <div>
          
        </div>
      </div>
    )
  }
}

export default App;
