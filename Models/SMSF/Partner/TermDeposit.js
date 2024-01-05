const Mongoose = require('mongoose');

const TermDepositSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    CurrentValue1: {
        type: String
    },
    FinancialInstitution1: {
        type: String
    },
    IncomeYield1: {
        type: String
    },
    AnnualIncome1: {
        type: String
    },
    CurrentValue2: {
        type: String
    },
    FinancialInstitution2: {
        type: String
    },
    IncomeYield2: {
        type: String
    },
    AnnualIncome2: {
        type: String
    },
    CurrentValue3: {
        type: String
    },
    FinancialInstitution3: {
        type: String
    },
    IncomeYield3: {
        type: String
    },
    AnnualIncome3: {
        type: String
    },
});

module.exports = Mongoose.model("TermDepositDetails2", TermDepositSchema);