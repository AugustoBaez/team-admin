const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            minLength: [3, "username must be at least 3 characters"]
        },
        mail: {
            type: String,
            required: [true, "email is required"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        password: {
            type: String,
            required: [true, "password is required"],
            minLength: [[8, "password must be at least 8 characters"]]

        },
    },
    { timestamps: true }
)
const User = mongoose.model("User", UserSchema)
model.exports = User