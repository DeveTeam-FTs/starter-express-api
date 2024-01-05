const Mongoose = require("mongoose");

const BucketCompanyClient_BusinessSchema = new Mongoose.Schema({
    

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
      clientBCCHolding:{
        type: Number
    },
    clientBCPHolding:{
        type: Number
    },
    clientBCName:{
        type: String
    },
    clientBCACN:{
        type: String
    },
    clientBCAddress:{
        type: String
    },
    clientBCCDirectorship:{
        type: Number
    },
    clientBCPDirectorship:{
        type: String
    },
    clientBCCDividend:{
        type: Number
    },
    clientBCPDividend:{
        type: Number
    },
    clientBCCEquity:{
        type: Number
    },
    clientBCPEquity:{
        type: Number
    }
    //******************************** End of bucket Company - Business Details ********************************
});

module.exports = Mongoose.model("BucketCompanyClientBusinessDetails", BucketCompanyClient_BusinessSchema);