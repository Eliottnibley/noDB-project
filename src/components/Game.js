import React, {Component} from 'react'

class Game extends Component {
  constructor() {
    super() 
    this.state = {
      isGameGoing: false
    }
  }

  truncate (text) {
    if(text.length > 15) {
      return text.substring(0, 15) + '...'
    }
    else {
      return text
    }
  }

  render () {
    if (this.props.teams.length !== 0){
      let teamA = {id:0, name:'', location:''}
      let teamB = {id:0, name:'', location:''}
      if (this.props.teams.length ===2){
        const index = this.props.teams[0].location.indexOf('a')
        if (index === -1) {
        teamA = this.props.teams[1]
        teamB = this.props.teams[0]
        } 
        else {
        teamA = this.props.teams[0]
        teamB = this.props.teams[1]
        }
        return (
          <div className={`game${this.props.teams[0].location.charAt(0)}`}>
            <span>
              <p>{this.truncate(teamA.name)}</p> 
              <button onClick={() => this.props.advance(teamA.location)}>Advance</button>
            </span>
            <span>
              <p>{this.truncate(teamB.name)}</p>
              <button onClick={() => this.props.advance(teamB.location)}>Advance</button>
            </span>
          </div>
        )
      }
      else {
        let index = this.props.teams[0].location.indexOf('a')
        if (index === -1){
          teamB = this.props.teams[0]
        }
        else {
          teamA = this.props.teams[0]
        }
        if (teamB.location === ''){
          return (
            <div className={`game${this.props.teams[0].location.charAt(0)}`}>
              <span>
                <p>{this.truncate(teamA.name)}</p> 
              </span>
              <span>
              </span>
            </div>
          )
        }
        else {
          return (
            <div className={`game${this.props.teams[0].location.charAt(0)}`}>
              <span>
              </span>
              <span>
                <p>{this.truncate(teamB.name)}</p>
              </span>
            </div>
          )
        }
      }
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default Game