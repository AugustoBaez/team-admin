const mongoose = require("mongoose")

mongoose.get("strictQuery", true)
mongoose.connect("mongodb://localhost/team", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("conexion established"))
    .catch((error) => console.log("error conectando a la db", error))