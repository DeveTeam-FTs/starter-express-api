const Mongoose = require("mongoose");

const clientCentreLink = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    //Client employment details
    clientCLApa: { type : Number },
    clientCLCDate: { type : String },
    clientCLCard: { type : String },
    clientCLCarerAllowance: { type : String },
    clientCLClp: { type : String },
    clientCLCrn: { type : String },
    clientCLFamilyTax: { type : String },
    clientCLGifts: { type : String },
    clientCLHowMuch: { type : Number },
    clientCLOwner: { type : String },
    clientCLPa: { type : Number },
    clientCLYears: { type : String },

    clientCLRent: { type : String },
    clientCLFtb: { type : String },

    



   


//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Client_IncomeExpenseCentreLink", clientCentreLink);