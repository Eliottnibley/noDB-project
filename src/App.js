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
      bracketDone: false,
    }
    this.createBracket = this.createBracket.bind(this)
  }

  createBracket (teamsList) {
    teamsList = {
      teamsList: teamsList
    }
    axios.post('/teams', teamsList)
    .then((res) => this.setState({teams: res.data}))
    .catch( err => console.log('teams did not post'))

    this.toggleInSetup()
  }

  getTeams () {
    axios.get('/teams')
    .then (res => this.setState({teams: res.data}))
    .catch (err => console.log('could not get teams'))
  }

  toggleInSetup () {
    this.setState({isSetup: !this.state.isSetup})
  }

  sortTeams () {
    let char = ''
    let sort = {
      game1: [],
      game2: [],
      game3: [],
      game4: [],
      game5: [],
      game6: [],
      game7: [],
    }
    let team = {}
    for (let i = 0; i < this.state.teams.length; i++){
      char = this.state.teams[i].location.charAt(0)
      team = this.state.teams[i]

      if (char === '1'){
        sort['game1'].push(team)
      }
      if (char === '2'){
        sort['game2'].push(team)
      }
      if (char === '3'){
        sort['game3'].push(team)
      }
      if (char === '4'){
        sort['game4'].push(team)
      }
      if (char === '5'){
        sort['game5'].push(team)
      }
      if (char === '6'){
        sort['game6'].push(team)
      }
      if (char === '7'){
        sort['game7'].push(team)
      }
    }
    return sort
  }

  render() {
    if (this.state.isSetup){
      return (
        <div className="App">
          <Header/>
          <Setup createBracket={this.createBracket}/>
        </div>
      )
    }
    else if (this.state.bracketDone){
      return (
        <div className='App'>
          <Header/>
          <div>A winner has been decided</div>
        </div>
      )
    }
    else {
      if (this.state.teams[0]){
        let sortedTeams = this.sortTeams()
        return (
          <div className='App'>
            <Header/>
            <div className='display-games'>
              <Game teams={sortedTeams.game1}/>
              <Game teams={sortedTeams.game2}/>
              <Game teams={sortedTeams.game3}/>
              <Game teams={sortedTeams.game4}/>
              <Game teams={sortedTeams.game5}/>
              <Game teams={sortedTeams.game6}/>
              <Game teams={sortedTeams.game7}/>
            </div>
            <button onClick={() => this.toggleInSetup()}>Back to Setup</button>
          </div>
        )
        
      }
      else {
        return (
          <div className='App'>
            <Header/>
            This is a mok up
            <div className='display-games'>
              
            </div>
            <button onClick={() => this.toggleInSetup()}>Back to Setup</button>
          </div>
        )
      }
    }
  }
}

export default App;
