const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema(
    {
        player: {
            type: String,
            required: [true, "name is required"],
            minLength: [3, "name must be at least 3 characters long"]
        },
        status: {
            type: null
        },
        position: {
            type: String,
        }
    },
    { timestamps: true }
)
const Team = mongoose.model("Team", TeamSchema)