const Company = require("../Models/CompanyModel");

//Select out all the companies
//http://localhost:1337/api/companies
companyList = async (request, result) => {
    await Company.find({}, (err, companies) => {
        if (err) {
            return result.status(400).json({ success: false, error: err });
        }


        if (!companies.length) {
            return result
                .status(404)
                .json({ success: false, error: `No companies found.` });
        }

        return result.status(200).json({ success: true, data: companies });
    }).catch(err => console.log(err));
}

//Select specific company
//http://localhost:1337/api/company/Airtight
companySelect = async (request, result) => {
    await Company.findOne({ Name: request.params.name }, (err, company) => {
        if (err) {
            return result.status(400).json({ success: false, error: err });
        }

        if (!company) {
            return result
                .status(404)
                .json({ success: false, error: `Company not found.` });
        }

        return result.status(200).json({ success: true, data: company });
    })
        .collation({ locale: "en", strength: 2 }) //Strength 2 makes this ignore casing
        .catch(err => console.log(err));
}

module.exports = {
    companyList,
    companySelect,
}