const Mongoose = require("mongoose");

const ClientPensionSchema = new Mongoose.Schema({  
    
    Email:{
        type: String
    },
    AccountPension_FundName:{
        type: String
    },
    AccountPension_MemberNO:{
        type: Number
    },
    AccountPension_FundType:{
        type: String
    },
    AccountPension_ContactNO:{
        type: Number
    },
    AccountPension_FaxNO:{
        type: Number
    },
    AccountPension_PostalAddress:{
        type: String
    },
    AccountPension_ABN:{
        type: Number
    },
    AccountPension_SPIN:{
        type: String
    },
    AccountPension_Website:{
        type: String
    },
    AccountPension_Email:{
        type: String
    },
    AccountPension_PensionType:{
        type: String
    },
    AccountPension_CurrentBalance:{
        type: Number
    },
    AccountPension_TaxFree:{
        type: Number
    },
    AccountPension_Taxed:{
        type: Number
    },
    AccountPension_EligibleService:{
        type: String
    },
    AccountPension_CommencementDate:{
        type: String
    },
    AccountPension_OriginalPrice:{
        type: Number
    },
    AccountPension_IncomeDrawn:{
        type: Number
    },
    AccountPension_Frequency:{
        type: String
    },
    AccountPension_MinimumRequired:{
        type: Number
    },
    AccountPension_RelevantNumber:{
        type: Number
    },
    AccountPension_LumpsumTaken:{
        type: Number
    },
    AccountPension_DeductibleAmount:{
        type: Number
    }
});

module.exports = Mongoose.model("ClientPensionAccountDetails", ClientPensionSchema);