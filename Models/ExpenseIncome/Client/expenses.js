const Mongoose = require("mongoose");

const clientExpenses = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    clientExpenseType : { type : String },
    clientExpensesItem: { type : String },
    clientExpenseAmount: { type : Number },
    clientExpenseYear: { type : String },


//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Client_IncomeExpenseExpenses", clientExpenses);