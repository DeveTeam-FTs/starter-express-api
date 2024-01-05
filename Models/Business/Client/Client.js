const Mongoose = require("mongoose");

const Client_BusinessSchema = new Mongoose.Schema({
   
    
    Email:{
        type: String
    },
    //******************************** Client Sole Trader - Business Details ********************************
    clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    }, 
    // Sole Trader 
  
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
    }, 
    
    // Partnershiip
 
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
    
    // Trading Company
  
    clientTCName:{
        type: String
    } ,
    clientTCABN:{
        type: String
    } ,
    clientTCACN:{
        type: Number
    } ,
    clientTCAddress:{
        type: String
    } ,
    clientTCDirectors:{
        type: Number
    } ,
    clientTCDirectorship:{
        type: String
    } ,
    clientTCShares:{
        type: Number
    } , 
    clientTCDividend:{  
        type: Number
    } , 
    clientTCEquity:{
        type: Number
    } ,
  
    // Business Trust
  
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
    } ,
   
    // Bucket Company
  
    clientBCCHolding:{
        type: Number
    },
    clientBCPHolding:{
        type: Number
    },
    clientBCName:{
        type: String
    },
    clientBCACN:{
        type: String
    },
    clientBCAddress:{
        type: String
    },
    clientBCCDirectorship:{
        type: Number
    },
    clientBCPDirectorship:{
        type: String
    },
    clientBCCDividend:{
        type: Number
    },
    clientBCPDividend:{
        type: Number
    },
    clientBCCEquity:{
        type: Number
    },
    clientBCPEquity:{
        type: Number
    }
  
   
   
    //******************************** End of Business Trust - Business Details ********************************
});

module.exports = Mongoose.model("ClientBusinessDetails", Client_BusinessSchema);