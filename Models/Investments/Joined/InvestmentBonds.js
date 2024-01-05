const Mongoose = require("mongoose");

const InvestmentBondsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },

    Email:{
        type: String
    },
    InvestmentBondsPlatformName:{
        type: String
    },
    InvestmentBondsInvestmentName:{
        type: String
    },
    InvestmentBondsNumberOfShares:{
        type: Number
    },
    InvestmentBondsSharePrice:{
        type: Number
    },
    InvestmentBondsCurrentValue:{
        type: Number
    },
    InvestmentBondsOriginalInvestment:{
        type: Number
    },
    InvestmentBondsPurchaseDate:{
        type: String
    },
    InvestmentBondsIncomePA:{
        type: Number
    },
    InvestmentBondsIncomePAType:{
        type: String
    },
    InvestmentBondsTotalIncomePA:{
        type: Number
    },
    InvestmentBondsReinvestedIncome:{
        type: String
    },
    InvestmentBondsRegInvestments:{
        type: Number
    }
});

module.exports = Mongoose.model("JoinedInvestmentBondsDetails", InvestmentBondsSchema);