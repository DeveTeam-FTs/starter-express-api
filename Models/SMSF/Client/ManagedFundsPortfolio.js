const Mongoose = require("mongoose");

const ManagedFundsSchema = new Mongoose.Schema({
    
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
    ManagedFundsPortfolioRepaymentAmount:{
        type: Number
    },
    ManagedFundsPortfolioFrequency:{
        type: String
    },
    ManagedFundsPortfolioAnnualRepayments:{
        type: Number
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
    }
});

module.exports = Mongoose.model("SMSF_ManagedFundsPortfolioDetails", ManagedFundsSchema);