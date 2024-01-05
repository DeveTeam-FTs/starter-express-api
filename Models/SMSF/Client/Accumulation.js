const Mongoose = require('mongoose');

const AccumulationSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    MemberName: {
        type: String
    },
    EligibleDate: {
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
    NonPreservedRestriction: {
        type: Number
    },
    NonPreservedUnRestriction: {
        type: Number
    },
    PreservedAmount: {
        type: Number
    }
});

module.exports = Mongoose.model("AccumulationDetails", AccumulationSchema);