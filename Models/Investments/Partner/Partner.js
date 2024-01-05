const Mongoose = require("mongoose");

const InvestmentSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    // email added by usama
    Email:{
        type: String
    },
    BankAccounts:{
        type: String
    },
    TermDeposits:{
        type: String
    },
    AustralianShareMarket:{
        type: String
    },
    AustralianSharePortfolio:{
        type: String
    },
    ManagedFunds:{
        type: String
    },
    ManagedFundsPortfolio:{
        type: String
    },
    InvestmentBonds:{
        type: String
    },
    InvestmentProperties:{
        type: String
    },
    Others:{
        type: String
    }
});

module.exports = Mongoose.model("PartnerInvestmentDetails", InvestmentSchema);