const Mongoose = require("mongoose");

const PartnershipClient_BusinessSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },

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
    clientPartnershipName:{
        type : String
    } ,
    clientPartnershipABN:{
        type : String
    } ,
    clientPartnershipAddress:{
        type : String
    } ,
    clientPartnershipIncome:{
        type : Number
    } ,
    clientPartnershipPartnership:{
        type : Number
    } ,
    clientPartnershipShareIncome:{
        type : Number
    } ,
    clientPartnershipGoodwill:{
        type : Number
    },
    //******************************** End of Partnership - Business Details ********************************
});

module.exports = Mongoose.model("PartnershipClientBusinessDetails", PartnershipClient_BusinessSchema);