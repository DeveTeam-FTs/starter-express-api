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
    },
    Super2:{
        type: String
    },
    AccountPension2:{
        type: String
    },
    Annuities2:{
        type: String
    },
    LifetimePension2:{
        type: String
    }
});

module.exports = Mongoose.model("RetirementClientDetails", RetirementSchema);