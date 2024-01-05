const Mongoose = require('mongoose');

const AustralianShareMarketSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    InvestmentName: {
        type: String
    },
    NoOfShares:{
        type: Number
    },
    CurrentSharePrice:{
        type: Number
    },
    TotalShareValue:{
        type: Number
    },
    CostBase:{
        type: Number
    },
    PurchaseDate: {
        type: String
    },
    IncomePA:{
        type: Number
    },
    IncomePAType: {
        type: String
    },
    TotalIncomePA: {
        type: String
    },
    ReinvestIncome: {
        type: String
    },
    FrankedAmount:{
        type: Number
    },
    RegInvestmentsPA:{
        type: Number
    }
});

module.exports = Mongoose.model("AustralianShareMarketDetails2", AustralianShareMarketSchema);