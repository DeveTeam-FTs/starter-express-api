const Mongoose = require("mongoose");

const Client_AssetsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
//******************************** Family Home - Assets ********************************
    HomeNO:{
        type: Number
    },
    CurrentValue:{
        type: Number
    },
    ClientOwnership:{
        type: Number
    },
    PartnerOwnership:{
        type: Number
    },
    CostBase:{
        type: Number
    },
    Address:{
        type: String
    },
    Postcode:{
        type: Number
    },
    AmountAssessed:{
        type: Number
    },
    PropertyLoan:{
        type: String
    },
    ClientBorrowingPercentage:{
        type: Number
    },
    PartnerBorrowingPercentage:{
        type: Number
    },
    CurrentBalance:{
        type: Number
    },
    RepaymentAmounts:{
        type: Number
    },
    Frequency:{
        type: String
    },
    AnnualRepayments:{
        type: Number
    },
    InterestRate:{
        type: Number
    },
    LoanTerm:{
        type: String
    },
    LoanType:{
        type: String
    },
    YearsRemaining:{
        type: String
    },
//******************************** End of Family Home - Assets ********************************
});

module.exports = Mongoose.model("ClientFamilyHomeDetails", Client_AssetsSchema);