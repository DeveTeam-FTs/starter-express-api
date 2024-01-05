const Mongoose = require("mongoose");

const ClientSuperSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    Super_FundName:{
        type: String
    },
    Super_MemberNO:{
        type: Number
    },
    Super_FundType:{
        type: String
    },
    Super_ContactNO:{
        type: Number
    },
    Super_FaxNO:{
        type: Number
    },
    Super_PostalAddress:{
        type: String
    },
    Super_ABN:{
        type: Number
    },
    Super_SPIN:{
        type: String
    },
    Super_Website:{
        type: String
    },
    Super_Email:{
        type: String
    },
    Super_FundType_2:{
        type: String
    },
    Super_CommencementDate:{
        type: String
    },
    Super_EligibleServiceDate:{
        type: String
    },
    Super_TFN:{
        type: String
    },
    Super_CurrentBalance:{
        type: Number
    },
    Super_TaxFree:{
        type: Number
    },
    Super_Taxed:{
        type: Number
    },
    Super_Restricted:{
        type: Number
    },
    Super_Unrestricted:{
        type: Number
    },
    Super_PreservedAmount:{
        type: Number
    }
});

module.exports = Mongoose.model("ClientSuperAccountDetails", ClientSuperSchema);