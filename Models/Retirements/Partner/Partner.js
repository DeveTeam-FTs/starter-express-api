const Mongoose = require("mongoose");

const RetirementSchema = new Mongoose.Schema({
    Email:{
        type: String
    },
    Super:{
        type: String
    },
    AccountPension:{
        type: String
    },
    Annuities:{
        type: String
    },
    LifetimePension:{
        type: String
    }


});

module.exports = Mongoose.model("RetirementPartnerDetails", RetirementSchema);