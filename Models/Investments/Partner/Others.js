const Mongoose = require("mongoose");

const OthersSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },

    Email:{
        type:String
    },
    OtherInvestmentName:{
        type: String
    },
    OtherCurrentValue:{
        type: Number
    },
    OtherCostBase:{
        type: Number
    },
    OtherPurchaseDate:{
        type: String
    },
    OtherIncomePA:{
        type: Number
    },
    OtherIncomePAType:{
        type: String
    },
    OtherTotalIncomePA:{
        type: Number
    },
    // OtherTotalIncomePAType:{
    //     type: String
    // },
    OtherReinvestedIncome:{
        type: String
    },
    OtherRegularInvestmentsPA:{
        type: Number
    },
    OtherInvestmentName2:{
        type: String
    },
    OtherCurrentValue2:{
        type: Number
    },
    OtherCostBase2:{
        type: Number
    },
    OtherPurchaseDate2:{
        type: String
    },
    OtherIncomePA2:{
        type: Number
    },
    OtherIncomePAType2:{
        type: String
    },
    OtherTotalIncomePA2:{
        type: Number
    },
    // OtherTotalIncomePAType2:{
    //     type: String
    // },
    OtherReinvestedIncome2:{
        type: String
    },
    OtherRegularInvestmentsPA2:{
        type: Number
    }
});

module.exports = Mongoose.model("partnerOthersDetails", OthersSchema);