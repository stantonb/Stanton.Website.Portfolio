var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var db = require("./server.js")
var app = express()
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "MongoDB connection error:"))


app.get("/", (req, res) => {
    res.send("Hello World! Test")
})

app.listen(port, () => console.log(`Server running on port ${port}`))