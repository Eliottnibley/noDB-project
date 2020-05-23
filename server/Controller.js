let teams = []
let id = 1
const startList = ['1a', '1b', '2a', '2b', '3a', '3b', '4a', '4b']

module.exports = {
  getTeams: (req, res) => {
    res.status(200).send(teams)
  },

  postTeams: (req, res) => {
    let teamsList = req.body
    if (teamsList.length !== 8){
      return res.status(500).send('Must fill in all Inputs')
    }

    let brackList = startList.slice()
    let randLoc = ''
    let newTeam = {}
    let index = 0

    for (let i = 0; i < teamsList.length; i++){
      if (teamsList[i] === ''){
        return res.status(500).send('team name cannot be an empty string')
      }
      randLoc = brackList[Math.floor(Math.random() * brackList.length)]

      index = brackList.findIndex(elem => elem === randLoc)

      brackList.splice(index, 1)

      newTeam = {
        id: id,
        name: teamsList[i],
        location: randLoc
      }

      teams.push(newTeam)

      id++
    }

    res.status(200).send(teams)
  },

  editTeam: (req, res) => {
    const {id} = req.params
    
    const {newName} = req.body
    
    const index = teams.findIndex(elem => elem.id === +id)

    if (index === -1) {
      return res.status(404).send('Team not found')
    }
    teams[index].name = newName
    res.status(200).send(teams)
  },

  updateLocation: (req, res) => {
    const {location} = req.body
    loc = location.split('')
    let newLoc = ''

    if(+loc[0] === 1){
      newLoc = '5a'
    }
    if (+loc[0] === 2) {
      newLoc = '5b'
    }
    if (+loc[0] === 3) {
      newLoc = '6a'
    }
    if (+loc[0] === 4) {
      newLoc = '6b'
    }
    if (+loc[0] === 5) {
      newLoc = '7a'
    }
    if (+loc[0] === 6){
      newLoc = '7b'
    }
    if (+loc[0] === 7) {
      newLoc = '8a'
    }
    const index = teams.findIndex(elem => elem.location === location)

    teams[index].location = newLoc

    res.status(200).send(teams)    
  },

  delete: (req, res) => {
    teams = []
    id = 1
    res.status(200).send(teams)
  }
}