const Mongoose = require("mongoose");

const TermDepositSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },

    Email:{
        type: String
    },
    TermDepositCurrentValue:{
        type: Number
    },
    TermDepositFinancialInstitution:{
        type: String
    },
    TermDepositIncomePA:{
        type: Number
    },
    TermDepositIncomePAType:{
        type: String
    },
    TermDepositIncomeinDollars:{
        type: Number
    },
    TermDepositRegularSavings:{
        type: Number
    },
    TermDepositReinvestedIncome:{
        type: String
    } 
   
});

module.exports = Mongoose.model("JoinedTermDepositDetails", TermDepositSchema);