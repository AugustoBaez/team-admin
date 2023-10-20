const mongoose = require("mongoose")

mongoose.get("strictQuery", true)
mongoose.connect("mongodb://127.0.0.1:27017/team", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("conexion established"))
    .catch((error) => console.log("error conectando a la db", error))