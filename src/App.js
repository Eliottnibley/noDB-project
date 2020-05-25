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
      winners: [],
      isSetup: true,
      bracketDone: false,
    }
    this.createBracket = this.createBracket.bind(this)
    this.advance = this.advance.bind(this)
    this.setState = this.setState.bind(this)
    this.deleteTeams = this.deleteTeams.bind(this)
  }

  createBracket (teamsList) {
    teamsList = {
      teamsList: teamsList
    }
    axios.post('/teams', teamsList)
    .then((res) => this.setState({teams: res.data}))
    .catch( err => console.log('teams did not post'))

    this.toggleInSetup()
    this.getTeam()
  }

  toggleInSetup () {
    this.setState({isSetup: !this.state.isSetup})
  }

  advance (location) {
    let loc = {location: location}
    axios.put('/teams', loc)
    .then ((res) => this.setState({teams: res.data,}))
    
  }

  getTeam () {
    axios.get(`/teams`)
    .then (res => this.setState({winners: res.data}))
    .catch(err => console.log('get did not work'))
  }

  deleteTeams () {
    axios.delete('/teams')
    .then((res) => this.setState({teams: res.data}))
    .catch(err => console.log('delete did not work'))
    this.toggleInSetup()
  }

  win (team) {
    if(team.length !== 0){
      return (
        <Winner name={team[0].name}/>
      )
    }
  }
  
  winnerCircle () {
    let str = `Winner's Circle: `
    for (let i = 0; i < this.state.winners.length; i++){
      if (i == this.state.winners.length - 1){
        str += `${this.state.winners[i]}`
      }
      else {
        str += `${this.state.winners[i]}, `
      }
    }
    return str
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
      winner: []
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
      if (char === '8'){
        sort['winner'].push(team)
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
            <h5>{this.winnerCircle()}</h5>
            <div className='display-games'>
              <Game advance={this.advance} teams={sortedTeams.game1}/>
              <Game advance={this.advance} teams={sortedTeams.game2}/>
              <Game advance={this.advance} teams={sortedTeams.game3}/>
              <Game advance={this.advance} teams={sortedTeams.game4}/>
              <Game advance={this.advance} teams={sortedTeams.game5}/>
              <Game advance={this.advance} teams={sortedTeams.game6}/>
              <Game advance={this.advance} teams={sortedTeams.game7}/>
              <div className='winner-placement'>
                {this.win(sortedTeams.winner)}
              </div>
            </div>
            <button className='reset' onClick={() => this.deleteTeams()}>Reset Bracket</button>
            
          </div>
        )
        
      }
      else {
        return (
          <div className='App'>
            <Header/>
            <div className='display-games'>
              
            </div>
          </div>
        )
      }
    }
  }
}

export default App;
