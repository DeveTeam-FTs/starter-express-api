const Mongoose = require("mongoose");

const ManagedFundsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
    ManagedFundsPlatformName:{
        type: String
    },
    ManagedFundsInvestmentName:{
        type: String
    },
    ManagedFundsNumberOfShares:{
        type: Number
    },
    ManagedFundsSharePrice:{
        type: Number
    },
    ManagedFundsCurrentValue:{
        type: Number
    },
    ManagedFundsOriginalInvestment:{
        type: Number
    },
    ManagedFundsPurchaseDate:{
        type: String
    },
    ManagedFundsIncomePA:{
        type: Number
    },
    ManagedFundsIncomePAType:{
        type: String
    },
    ManagedFundsTotalIncomePA:{
        type: Number
    },
    ManagedFundsReinvestedIncome:{
        type: String
    },
    ManagedFundsRegInvestments:{
        type: Number
    }
});

module.exports = Mongoose.model("JoinedManagedFundsDetails", ManagedFundsSchema);