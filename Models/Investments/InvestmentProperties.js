const Mongoose = require("mongoose");

const InvestmentPropertiesSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type:String
    },
    InvestmentPropertiesCurrentValue:{
        type: Number
    },
    InvestmentPropertiesClientOwnership:{
        type: Number
    },
    InvestmentPropertiesCostBase:{
        type: Number
    },
    InvestmentPropertiesAddress:{
        type: String
    },
    InvestmentPropertiesPostcode:{
        type: Number
    },
    InvestmentPropertiesRentalIncome:{
        type: Number
    },
    InvestmentPropertiesFrequency:{
        type: String
    },
    InvestmentPropertiesTotalAnnualIncome:{
        type: Number
    },
    InvestmentPropertiesExpensesPA:{
        type: Number
    },
    InvestmentPropertiesLoanAttached:{
        type: String
    },
    InvestmentPropertiesCurrentBalance:{
        type: Number
    },
    InvestmentPropertiesClientBorrowing:{
        type: Number
    },
    InvestmentPropertiesLender:{
        type: String
    },
    InvestmentPropertiesRepaymentAmount:{
        type: Number
    },
    InvestmentPropertiesFrequency2:{
        type: String
    },
    InvestmentPropertiesAnnualRepayment:{
        type: Number
    },
    InvestmentPropertiesInterestRatePA:{
        type: Number
    },
    InvestmentPropertiesLoanTerm:{
        type: String
    },
    InvestmentPropertiesLoanType:{
        type: String
    },
    InvestmentPropertiesDebtLoanAmount:{
        type: Number
    },
    InvestmentPropertiesYearsRemaining:{
        type: String
    },
    InvestmentPropertiesPartnerBorrowing:{
        type: Number
    },
    InvestmentPropertiesPartnerOwnership:{
        type: Number
    },
});

module.exports = Mongoose.model("InvestmentPropertiesDetails", InvestmentPropertiesSchema);