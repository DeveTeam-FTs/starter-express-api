const Mongoose = require("mongoose");

const SolePartner_BusinessSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    
    Email:{
        type: String
    },
    //******************************** SolePartner Sole Trader - Business Details ********************************
    clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    },
    partnerSTBusinessName:{
        type: String
    }, 
    partnerSTABN:{
        type: String
    }, 
    partnerSTBusinessAddress:{
        type: String
    }, 
    partnerSTBusinessIncome:{
        type: Number
    }, 
    partnerSTGoodwill:{
        type: Number
    }
    
   
    //******************************** End of SolePartner Sole Trader - Business Details ********************************
});

module.exports = Mongoose.model("SolePartnerBusinessDetails", SolePartner_BusinessSchema);