const Mongoose = require("mongoose");

const TradingCompanyClient_BusinessSchema = new Mongoose.Schema({
  

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
    } 
  
    //******************************** End of Trading Company - Business Details ********************************
});

module.exports = Mongoose.model("TradingCompanyClientBusinessDetails", TradingCompanyClient_BusinessSchema);