const mongoose = require("mongoose");

//Set up the initial connection and specify the DB to connect to.
mongoose
    .connect("mongodb://localhost/Stanton_Website_Portfolio", { useNewUrlParser: true })
    .catch(e => {
        console.error("Connection error", e.message)
    });

module.exports = mongoose.connection;