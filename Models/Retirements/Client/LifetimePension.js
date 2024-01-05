const Mongoose = require("mongoose");

const ClientLifetimePensionSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    LifePension_FundName:{
        type: String
    },
    LifePension_RegularIncome:{
        type: Number
    },
    LifePension_Frequency:{
        type: String
    },
    LifePension_DeductibleAmount:{
        type: Number
    },
    LifePension_TaxFree_Pension:{
        type: String
    },
    LifePension_TaxablePensionAmount:{
        type: Number
    }
});

module.exports = Mongoose.model("ClientLifetimePensionAccountDetails", ClientLifetimePensionSchema);