const Mongoose = require("mongoose");

const partnerCentreLink = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    //Partner employment details
    partnerCLApa: { type : Number },
    partnerCLCDate: { type : String },
    partnerCLCard: { type : String },
    partnerCLCarerAllowance: { type : String },
    partnerCLClp: { type : String },
    partnerCLCrn: { type : String },
    partnerCLFamilyTax: { type : String },
    partnerCLGifts: { type : String },
    partnerCLHowMuch: { type : Number },
    partnerCLOwner: { type : String },
    partnerCLPa: { type : Number },
    partnerCLYears: { type : String },

    partnerCLRent: { type : String },
    partnerCLFtb: { type : String },

    



   


//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Partner_IncomeExpenseCentreLink", partnerCentreLink);