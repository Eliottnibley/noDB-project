import React, {Component} from 'react'

class Setup extends Component {
  constructor () {
    super() 
    this.state = {
      userInput: ['', '', '', '', '', '', '', ''],
      teamsArray: [],
      numTeams: 8
    }
  }

  handleInputChange (ind, e) {
    let newInput = this.state.userInput
    newInput[ind] = e.target.value
    this.setState({userInput: newInput})
  }

  render () {
    if (this.props.inSetup){
      return (
        <div className='setup-page'>
          <h3>Input the names of the teams in the participating</h3>
          <input onChange={(e) => this.handleInputChange(0, e)} placeholder='Team 1'></input>
          <input onChange={(e) => this.handleInputChange(1, e)} placeholder='Team 2'></input>
          <input onChange={(e) => this.handleInputChange(2, e)} placeholder='Team 3'></input>
          <input onChange={(e) => this.handleInputChange(3, e)} placeholder='Team 4'></input>
          <input onChange={(e) => this.handleInputChange(4, e)} placeholder='Team 5'></input>
          <input onChange={(e) => this.handleInputChange(5, e)} placeholder='Team 6'></input>
          <input onChange={(e) => this.handleInputChange(6, e)} placeholder='Team 7'></input>
          <input onChange={(e) => this.handleInputChange(7, e)} placeholder='Team 8'></input>
          <button onClick={() => this.props.createBracket(this.state.userInput)}>Create Bracket</button>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default Setup