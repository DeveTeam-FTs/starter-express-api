const Mongoose = require("mongoose");

const formFlagsClient_BusinessSchema = new Mongoose.Schema({
  

    Email:{
        type: String
    },
    //********************************  Business Details ********************************
    
    // client

    BC:{
        type: Boolean
    },
    BT:{
        type: Boolean
    }, 
    PartnerShip:{
        type: Boolean
    },
    ST:{
        type: Boolean
    },
    TC:{
        type: Boolean
    },

   
   
   
  
    //******************************** End Business Details ********************************
});

module.exports = Mongoose.model("FormFlagsClientBusinessDetails", formFlagsClient_BusinessSchema);