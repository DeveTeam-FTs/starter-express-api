const Mongoose = require("mongoose");

const AustralianSharePortfolioSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
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
        type: String
    },
    AustralianPortfolioYearRemaining:{
        type: String
    },
    AustralianPortfolioYearRemaining:{
        type: String
    },
    AustralianPortfolioDeductibleRepaymentsAmount:{
        type: Number
    },
    AustralianPortfolioDeductibleFrequency:{
        type: Number
    },
    AustralianPortfolioDeductibleAnnualRepayments:{
        type: Number
    },
    AustralianPortfolioDeductibleMonthlyContributions:{
        type: Number
    },
    AustralianPortfolioDeductibleTotalAnnualContributions:{
        type: Number
    },
});

module.exports = Mongoose.model("AustralianShareMarketPortfolioDetails", AustralianSharePortfolioSchema);