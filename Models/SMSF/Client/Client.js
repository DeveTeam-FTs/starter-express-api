const Mongoose = require('mongoose');

const ClientSMSFSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    Accumulation: {
        type: String
    },
    PensionAccount: {
        type: String
    },
    BankAccount: {
        type: String
    },
    TermDepositAccount: {
        type: String
    },
    AustralianShareMarket: {
        type: String
    },
    AustralianSharePortfolio: {
        type: String
    },
    ManagedFunds: {
        type: String
    },
    ManagedFundsPortfolio: {
        type: String
    },
    InvestmentProperties: {
        type: String
    }
});

module.exports = Mongoose.model("ClientSMSFDetails", ClientSMSFSchema);