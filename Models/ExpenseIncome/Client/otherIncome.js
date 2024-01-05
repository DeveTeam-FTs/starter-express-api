const Mongoose = require("mongoose");

const clientOtherIncome = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    clientOtherOwner : { type : String },
    clientOtherIncomeType: { type : String },
    clientOtherAmount: { type : Number },

//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Client_IncomeExpenseOtherIncome", clientOtherIncome);