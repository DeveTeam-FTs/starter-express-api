const Mongoose = require("mongoose");

const Partner_EstateSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
 
    partnerEPYear:{
        type: Number
    },
    partnerEPCurrentWill:{
        type: String
    },
    partnerEPExecutor:{
        type: String
    },
    partnerEPGuardianship:{
        type: String
    },
    partnerEPTrust:{
        type: String
    },
    partnerEPFuneralPlan:{
        type: String
    },
    partnerEPExpense:{
        type: String
    },
    partnerEPNeeds:{
        type: String
    },
    partnerEPPOA:{
        type: String
    },
    partnerEPPOAType:{
        type: String
    },
    partnerEPPOANumber:{
        type: String
    },
    partnerEPPOAName1:{
        type: String
    },
    partnerEPPOAName2:{
        type: String
    },
    partnerEPPOAName3:{
        type: String
    },
    partnerEPPOAName4:{
        type: String
    },
    partnerEPPOAName5:{
        type: String
    },
});

module.exports = Mongoose.model("PartnerEstateDetails", Partner_EstateSchema);