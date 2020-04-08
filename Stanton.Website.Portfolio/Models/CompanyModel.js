const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema(
    {
        Name: { type: String, required: true },
        StartDate: { type: Date, required: true },
        EndDate: { type: Date, required: true },
        Role: { type: String, required: true },
        Projects: {
            ProjectName: String,
            ProjectDescription: String
        },
    },
);

module.exports = mongoose.model("Company", CompanySchema);