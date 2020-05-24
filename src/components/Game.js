import React, {Component} from 'react'

class Game extends Component {
  constructor() {
    super() 
    this.state = {
      isGameGoing: false
    }
  }

  render () {
    if (this.props.teams.length !== 0){
      return (
        <div className={`game${this.props.teams[0].location.charAt(0)}`}>
          <p>Team A</p>
          <p>Team B</p>
        </div>
      )
    }
    else {
      return (
        <div>nobody in this game</div>
      )
    }
  }
}

export default Game