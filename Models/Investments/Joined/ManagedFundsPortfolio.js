const Mongoose = require("mongoose");

const ManagedFundsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },

    Email:{
        type: String
    },

    ManagedFundsPortfolioLoanType:{
        type: String
    },
    ManagedFundsPortfolioCurrentBalance:{
        type: Number
    },
    ManagedFundsPortfolioLender:{
        type: String
    },
    ManagedFundsPortfolioInterestRatePA:{
        type: Number
    },
    ManagedFundsPortfolioLoanTerm:{
        type: String
    },
    ManagedFundsPortfolioLoanType2:{
        type: String
    },
    ManagedFundsPortfolioDeductibleLoanAmount:{
        type: Number
    },
    ManagedFundsPortfolioYearRemaining:{
        type: String
    },
    ManagedFundsPortfolioRepaymentsAmount:{
        type: Number
    },
    ManagedFundsPortfolioFrequency:{
        type: Number
    },
    ManagedFundsPortfolioAnnualRepayments:{
        type: Number
    },
    ManagedFundsPortfolioMonthlyContributions:{
        type: Number
    },
    ManagedFundsPortfolioTotalAnnualContributions:{
        type: Number
    },
});

module.exports = Mongoose.model("JoinedManagedFundsPortfolioDetails", ManagedFundsSchema);