const Mongoose = require("mongoose");

const Client_EstateSchema = new Mongoose.Schema({

    Email:{
        type: String
    },
    clientEPOwner:{
        type: String
    },
    clientEPYear:{
        type: Number
    },
    clientEPCurrentWill:{
        type: String
    },
    clientEPExecutor:{
        type: String
    },
    clientEPGuardianship:{
        type: String
    },
    clientEPTrust:{
        type: String
    },
    clientEPFuneralPlan:{
        type: String
    },
    clientEPExpense:{
        type: String
    },
    clientEPNeeds:{
        type: String
    },
    clientEPPOA:{
        type: String
    },
    clientEPPOAType:{
        type: String
    },
    clientEPPOANumber:{
        type: String
    },
    clientEPPOAName1:{
        type: String
    },
    clientEPPOAName2:{
        type: String
    },
    clientEPPOAName3:{
        type: String
    },
    clientEPPOAName4:{
        type: String
    },
    clientEPPOAName5:{
        type: String
    },
});

module.exports = Mongoose.model("ClientEstateDetails", Client_EstateSchema);