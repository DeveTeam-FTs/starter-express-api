const Mongoose = require("mongoose");

const BusinessTrustPartner_BusinessSchema = new Mongoose.Schema({
  


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
    partnerBTName:{
        type: String
    } ,
    partnerBTABN:{
        type: String
    } ,
    partnerBTAddress:{
        type: String
    } ,
    partnerBTTrustee:{
        type: String
    } ,
    partnerBTTrusteeName:{
        type: String
    } ,
    partnerBTDistribution:{
        type: Number
    } ,
    partnerBTOwnership:{
        type: Number
    } ,
    partnerBTBusiness:{
        type: Number
    } 
    //******************************** End of Business Trust - Business Details ********************************
});

module.exports = Mongoose.model("BusinessTrustPartnerBusinessDetails", BusinessTrustPartner_BusinessSchema);