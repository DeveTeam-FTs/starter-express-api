const Mongoose = require("mongoose");

const BusinessTrustClient_BusinessSchema = new Mongoose.Schema({
  


    Email:{
        type: String
    },    
    //******************************** Business Trust - Business Details ********************************
    clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    }, 
    clientBTName:{
        type: String
    } ,
    clientBTABN:{
        type: String
    } ,
    clientBTAddress:{
        type: String
    } ,
    clientBTTrustee:{
        type: String
    } ,
    clientBTTrusteeName:{
        type: String
    } ,
    clientBTDistribution:{
        type: Number
    } ,
    clientBTOwnership:{
        type: Number
    } ,
    clientBTBusiness:{
        type: Number
    } 
    //******************************** End of Business Trust - Business Details ********************************
});

module.exports = Mongoose.model("BusinessTrustClientBusinessDetails", BusinessTrustClient_BusinessSchema);