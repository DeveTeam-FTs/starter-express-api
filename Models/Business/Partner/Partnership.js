const Mongoose = require("mongoose");

const PartnershipPartner_BusinessSchema = new Mongoose.Schema({
   

    Email:{
        type: String
    },    
    //******************************** Partnership - Business Details ********************************
    clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    }, 
    partnerPartnershipName:{
        type : String
    } ,
    partnerPartnershipABN:{
        type : String
    } ,
    partnerPartnershipAddress:{
        type : String
    } ,
    partnerPartnershipIncome:{
        type : Number
    } ,
    partnerPartnershipPartnership:{
        type : Number
    } ,
    partnerPartnershipShareIncome:{
        type : Number
    } ,
    partnerPartnershipGoodwill:{
        type : Number
    },
    //******************************** End of Partnership - Business Details ********************************
});

module.exports = Mongoose.model("PartnershipPartnerBusinessDetails", PartnershipPartner_BusinessSchema);