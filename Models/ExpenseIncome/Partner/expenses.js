const Mongoose = require("mongoose");

const partnerExpenses = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    partnerExpenseType : { type : String },
    partnerExpensesItem: { type : String },
    partnerExpenseAmount: { type : Number },
    partnerExpenseYear: { type : String },


//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("partner_IncomeExpenseExpenses", partnerExpenses);