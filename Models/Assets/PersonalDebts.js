const Mongoose = require("mongoose");

const Client_AssetsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
//******************************** Personal Debts - Assets ********************************

    PLDebtType :{
        type: String
    },
    PLCurrentBalance:{
        type: Number
    },
    PLRepaymentAmount:{
        type: Number
    },
    PLFrequency:{
        type: String
    },
    PLAnnualRepayment:{
        type: Number
    },
    PLInterestRate:{
        type: Number
    },
    PLLoanTerm:{
        type: String
    },
    PLLoanType:{
        type: String
    },
    PLYearRemaining:{
        type: String
    },
  //******************************** End of Personal Debts - Assets ********************************
});

module.exports = Mongoose.model("ClientPersonalDebtsDetails", Client_AssetsSchema);