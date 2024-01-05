const Mongoose = require("mongoose");

const partner_BusinessSchema = new Mongoose.Schema({
   
    
    Email:{
        type: String
    },
    //******************************** partner Sole Trader - Business Details ********************************
   
    // Sole Trader 
  
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
    }, 
    
    // Partnershiip
  
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
    
    // Trading Company
    
    partnerTCName:{
        type: String
    } ,
    partnerTCABN:{
        type: String
    } ,
    partnerTCACN:{
        type: Number
    } ,
    partnerTCAddress:{
        type: String
    } ,
    partnerTCDirectors:{
        type: Number
    } ,
    partnerTCDirectorship:{
        type: String
    } ,
    partnerTCShares:{
        type: Number
    } , // to be added in other files
    partnerTCDividend:{  
        type: Number
    } , 
    partnerTCEquity:{
        type: Number
    } ,
  
   
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
    } ,
   
    // Bucket Company
   
    partnerBCCHolding:{
        type: Number
    },
    partnerBCPHolding:{
        type: Number
    },
    partnerBCName:{
        type: String
    },
    partnerBCACN:{
        type: String
    },
    partnerBCAddress:{
        type: String
    },
    partnerBCCDirectorship:{
        type: Number
    },
    partnerBCPDirectorship:{
        type: String
    },
    partnerBCCDividend:{
        type: Number
    },
    partnerBCPDividend:{
        type: Number
    },
    partnerBCCEquity:{
        type: Number
    },
    partnerBCPEquity:{
        type: Number
    }
  
   
   
    //******************************** End of Business Trust - Business Details ********************************
});

module.exports = Mongoose.model("partnerBusinessDetails", partner_BusinessSchema);