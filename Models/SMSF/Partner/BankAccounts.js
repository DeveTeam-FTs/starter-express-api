const Mongoose = require('mongoose');

const BnakAccountSchema = new Mongoose.Schema({
    
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
    }
});

module.exports = Mongoose.model("BankAccountDetails3", BnakAccountSchema);