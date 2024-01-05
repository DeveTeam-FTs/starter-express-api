const Mongoose = require('mongoose');

const PensionSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    MemberName: {
        type: String
    },
    PensionType: {
        type: String
    },
    CommencementDateDate: {
        type: String
    },
    CurrentBalance: {
        type: Number
    },
    TaxFree: {
        type: Number
    },
    Taxed: {
        type: Number
    },
    OriginalPurchasePrice: {
        type: Number
    },
    Frequency: {
        type: String
    },
    RegularIncomeDrawn: {
        type: Number
    },
    MinimumRequired: {
        type: Number
    },
    RelevantNumber: {
        type: Number
    },
    LumpsumTaken: {
        type: Number
    },
    DeductibleAmount: {
        type: Number
    },
});

module.exports = Mongoose.model("PensionDetails2", PensionSchema);