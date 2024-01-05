const Mongoose = require("mongoose");

const BucketCompanyPartner_BusinessSchema = new Mongoose.Schema({
    

    Email:{
        type: String
    },
    //******************************** Bucket Company - Business Details ********************************
     
      clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    }, 
      partnerBCCHolding:{
        type: Number
    },
    partnerBCPHolding:{
        type: Number
    },
    partnerBCName:{
        type: String
    },
    partnerBCACN:{
        type: String
    },
    partnerBCAddress:{
        type: String
    },
    partnerBCCDirectorship:{
        type: Number
    },
    partnerBCPDirectorship:{
        type: String
    },
    partnerBCCDividend:{
        type: Number
    },
    partnerBCPDividend:{
        type: Number
    },
    partnerBCCEquity:{
        type: Number
    },
    partnerBCPEquity:{
        type: Number
    }
    //******************************** End of bucket Company - Business Details ********************************
});

module.exports = Mongoose.model("BucketCompanyPartnerBusinessDetails", BucketCompanyPartner_BusinessSchema);