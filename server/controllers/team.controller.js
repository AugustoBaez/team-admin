const Team = require("../models/team.model")
const catchError = (error, res) => res.status(400).json(error)

module.exports.findAllPlayers = (req, res) => {
    Team.find()
        .then((player) => res.json({ player }))
        .catch((error) =>
            res.json({ message: "error finding players", error })
        )
}

module.exports.findPlayer = (req, res) => {
    Team.find(req.body)
        .then((player) => res.json(player))
        .catch((error) => res.json({ message: "error finding player", error }))
}

module.exports.addPlayer = (req, res) => {
    Team.create(req.body)
        .then((newPlayer) => res.json({ player: newPlayer }))
        .catch((error) => res.json({ message: "error adding new player", error }))
}

module.exports.updatePlayer = (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatePlayer) => res.json({ player: updatePlayer }))
        .catch((error) => res.json({ message: "could not update player", error }))
}

module.exports.deletePlayer = (req, res) => {
    Team.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result }))
        .catch((error) => res.json({ message: "error deleting player", error }))
}
