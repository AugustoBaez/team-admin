const TeamController = require("../controllers/team.controller")

module.exports = (app) => {
    app.get("/api/players/", TeamController.findAllPlayers)
    app.get("/api/player/:id", TeamController.findPlayer)
    app.post("/api/player/new", TeamController.addPlayer)
    app.put("/api/player/update/:id", TeamController.updatePlayer)
    app.delete("/api/player/delete/:id", TeamController.deletePlayer)
}