const Mongoose = require('mongoose');

const BnakAccountSchema = new Mongoose.Schema({
    
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
    
});

module.exports = Mongoose.model("BnakAccountDetails", BnakAccountSchema);