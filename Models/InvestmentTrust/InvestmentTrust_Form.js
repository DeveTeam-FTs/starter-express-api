const Mongoose = require('mongoose');

const InvestmentTrust_Form = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    FamilyTrustName:{
        type: String
    },
    TrustType:{
        type: String
    },
    ABN:{
        type: String
    },
    CorporateTrusteeName:{
        type:String
    },
    CashDistribution:{
        type: String
    },
    EstablishmentDate:{
        type: String
    },
    AccountantName:{
        type: String
    },
    TrusteeType:{
        type: String
    },
    TotalDirectors:{
        type: Number
    },
    Director1Name:{
        type: String
    },
    Director2Name:{
        type: String
    },
    Director3Name:{
        type: String
    },
    Director4Name:{
        type: String
    },
    AustralianSharePortfolio:{
        type:String
    },
    ManagedFunds:{
        type:String
    }
});

module.exports = Mongoose.model("InvestmentTrust_FormDetails", InvestmentTrust_Form)