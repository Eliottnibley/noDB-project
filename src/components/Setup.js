import React, {Component} from 'react'

class Setup extends Component {
  constructor () {
    super() 
    this.state = {
      teamsList: ['', '', '', '', '', '', '', ''],
      numTeams: 8
    }
  }

  handleInputChange (ind, e) {
    let newInput = this.state.teamsList
    newInput[ind] = e.target.value
    this.setState({teamsList: newInput})
  }

  render () {
    return (
      <div className='setup-page'>
        <h3>Input the names of the teams participating</h3>
        <input onChange={(e) => this.handleInputChange(0, e)} placeholder='Team 1'></input>
        <input onChange={(e) => this.handleInputChange(1, e)} placeholder='Team 2'></input>
        <input onChange={(e) => this.handleInputChange(2, e)} placeholder='Team 3'></input>
        <input onChange={(e) => this.handleInputChange(3, e)} placeholder='Team 4'></input>
        <input onChange={(e) => this.handleInputChange(4, e)} placeholder='Team 5'></input>
        <input onChange={(e) => this.handleInputChange(5, e)} placeholder='Team 6'></input>
        <input onChange={(e) => this.handleInputChange(6, e)} placeholder='Team 7'></input>
        <input onChange={(e) => this.handleInputChange(7, e)} placeholder='Team 8'></input>
        <button onClick={() => this.props.createBracket(this.state.teamsList)}>Create Bracket</button>
      </div>
    )
    
  }
}

export default Setup