const Mongoose = require("mongoose");

const AustralianSharePortfolioSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    AustralianPortfolioLoanType:{
        type: String
    },
    AustralianPortfolioCurrentBalance:{
        type: Number
    },
    AustralianPortfolioLender:{
        type: String
    },
    AustralianPortfolioRepaymentAmount:{
        type: Number
    },
    AustralianPortfolioFrequency:{
        type: String
    },
    AustralianPortfolioAnnualRepayment:{
        type: Number
    },
    AustralianInterestRatePA:{
        type: Number
    },
    AustralianPortfolioLoanTerm:{
        type: String
    },
    AustralianPortfolioLoanType2:{
        type: String
    },
    AustralianPortfolioDeductibleLoanAmount:{
        type: Number
    },
    AustralianPortfolioYearRemaining:{
        type: String
    }
});

module.exports = Mongoose.model("AustralianShareMarketPortfolioDetails2", AustralianSharePortfolioSchema);