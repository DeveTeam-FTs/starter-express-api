const Mongoose = require("mongoose");

const AustralianShareMarketSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type:String
    },
    AustralianMarketInvestmentName:{
        type: String
    },
    AustralianMarketNumberOfShares:{
        type: Number
    },
    AustralianMarketSharePrice:{
        type: Number
    },
    AustralianMarketTotalShareValue:{
        type: Number
    },
    AustralianMarketCostBase:{
        type: Number
    },
    AustralianMarketPurchaseDate:{
        type: String
    },
    AustralianMarketIncomePA:{
        type: Number
    },
    AustralianMarketIncomePAType:{
        type: String
    },
    AustralianMarketTotalIncomePA:{
        type: Number
    },
    AustralianMarketFrankedAmount:{
        type: Number
    },
    AustralianMarketReinvestedIncome:{
        type: String
    },
    AustralianMarketRegInvestments:{
        type: Number
    }
});

module.exports = Mongoose.model("AustralianShareMarketDetails", AustralianShareMarketSchema);