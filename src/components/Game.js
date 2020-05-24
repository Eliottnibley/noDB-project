import React, {Component} from 'react'

class Game extends Component {
  constructor() {
    super() 
    this.state = {
      isGameGoing: false
    }
  }

  render () {
    console.log(this.props.teams)
    return (
      <div className={`game${this.props.teams[0].location.charAt(0)}`}>
        
      </div>
    )
  }
}

export default Game