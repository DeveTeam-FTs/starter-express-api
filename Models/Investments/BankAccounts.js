const Mongoose = require("mongoose");

const BankAccountsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
     // email added by usama
     Email:{
        type: String
    },
    BankCurrentValue:{
        type: Number
    },
    BankFinancialInstitution:{
        type: String
    },
    BankIncomePA:{
        type: Number
    }, 
    BankIncomePAType:{
        type: String
    }, 
    BankIncomeinDollars:{
        type: Number
    },
    BankRegularSavings:{
        type: Number
    },
    BankReinvestedIncome:{
        type: String
    },
   
});

module.exports = Mongoose.model("BankAccountsDetails", BankAccountsSchema);