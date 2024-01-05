const Mongoose = require("mongoose");

const TradingCompanyPartner_BusinessSchema = new Mongoose.Schema({
  

    Email:{
        type: String
    },
    //******************************** Trading Company - Business Details ********************************
    clientStructureType:{
        type: String
    },
    clientOwner:{
        type: String
    }, 
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
    } , 
    partnerTCDividend:{  
        type: Number
    } , 
    partnerTCEquity:{
        type: Number
    } 
  
    //******************************** End of Trading Company - Business Details ********************************
});

module.exports = Mongoose.model("TradingCompanyPartnerBusinessDetails", TradingCompanyPartner_BusinessSchema);