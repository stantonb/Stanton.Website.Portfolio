const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 1337;

//Connect to the DB
const db = require("./Server/server.js");

db.once("open", function () {
    console.log("Connected to Stanton_Website_Portfolio");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Add all the API routes
const companyRouter = require("./Routes/CompanyRouter");
app.use("/api", companyRouter); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port ${port}`));