const express = require('express')
const ctlr = require('./Controller')

const app = express()
const SERVER_PORT = 3004
app.use(express.json())

app.get('/teams', ctlr.getTeam)
app.post('/teams', ctlr.postTeams)
app.put('/teams/:id', ctlr.editTeam)
app.put('/teams', ctlr.updateLocation)
app.delete('/teams', ctlr.delete)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))