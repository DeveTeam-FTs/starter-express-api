const Mongoose = require("mongoose");

const SoleClient_BusinessSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    
    Email:{
        type: String
    },
    //******************************** SoleClient Sole Trader - Business Details ********************************
    clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    },
    clientSTBusinessName:{
        type: String
    }, 
    clientSTABN:{
        type: String
    }, 
    clientSTBusinessAddress:{
        type: String
    }, 
    clientSTBusinessIncome:{
        type: Number
    }, 
    clientSTGoodwill:{
        type: Number
    }
    
   
    //******************************** End of SoleClient Sole Trader - Business Details ********************************
});

module.exports = Mongoose.model("SoleClientBusinessDetails", SoleClient_BusinessSchema);