const Mongoose = require('mongoose');

const BankAccountSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    CurrentValue1: {
        type: Number
    },
    FinancialInstitution1: {
        type: String
    },
    IncomeYield1: {
        type: Number
    },
    AnnualIncome1: {
        type: Number
    },
    CurrentValue2: {
        type: Number
    },
    FinancialInstitution2: {
        type: String
    },
    IncomeYield2: {
        type: Number
    },
    AnnualIncome2: {
        type: Number
    },
    CurrentValue3: {
        type: Number
    },
    FinancialInstitution3: {
        type: String
    },
    IncomeYield3: {
        type: Number
    },
    AnnualIncome3: {
        type: Number
    }
});

module.exports = Mongoose.model("BankAccountDetails2", BankAccountSchema);