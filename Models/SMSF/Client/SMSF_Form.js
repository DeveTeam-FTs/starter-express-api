const Mongoose = require('mongoose');

const SMSFFormSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    FundName: {
        type: String
    },
    FundType: {
        type: String
    },
    ABN: {
        type: Number
    },
    TrusteeType: {
        type: String
    },
    EstablishmentDate: {
        type: String
    },
    AssetsSegregated: {
        type: String
    },
    InvestmentBorrowing: {
        type: String
    },
    AcquireInsurances: {
        type: String
    },
    AccountantName: {
        type: String
    },
    AuditorName: {
        type: String
    },
    AccountingAuditing: {
        type: Number
    },
    ATOLevy: {
        type: Number
    },
    SMSFTrusteeName: {
        type: Number
    },

});

module.exports = Mongoose.model("SMSFDetails", SMSFFormSchema);