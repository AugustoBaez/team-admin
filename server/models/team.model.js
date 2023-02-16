const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            minLength: [3, "name must be at least 3 characters long"]
        },
        position: {
            type: String,
        }
    },
    { timestamps: true }
)
const Team = mongoose.model("Team", TeamSchema)
module.exports = Team