const Mongoose = require("mongoose");

const partnerOtherIncome = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    partnerOtherOwner : { type : String },
    partnerOtherIncomeType: { type : String },
    partnerOtherAmount: { type : Number },

//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Partner_IncomeExpenseOtherIncome", partnerOtherIncome);