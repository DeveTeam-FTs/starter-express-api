const Mongoose = require('mongoose');

const ManagedFundsSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    PlatformName: {
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
    CurrentShareValue:{
        type: Number
    },
    OriginalInvestment:{
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
        type: Number
    },
    ReinvestIncome: {
        type: String
    },
    RegInvestmentsPA:{
        type: Number
    }
});

module.exports = Mongoose.model("ManagedFundsDetails2", ManagedFundsSchema);