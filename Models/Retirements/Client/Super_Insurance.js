const Mongoose = require("mongoose");

const Super_InsuranceSchema = new Mongoose.Schema({
    Email:{
        type: String
    },
    InsuranceAttached:{
        type: String
    },
    Life_TPD_Insurance:{
        type: String
    },
    CoverType:{
        type: String
    },
    LifeCover:{
        type: Number
    },
    TPDCover:{
        type: Number
    },
    CostPA:{
        type: Number
    },
    PremiumType:{
        type: String
    },
    LoadingExecutions:{
        type: String
    },
    LoadingExecution_Details:{
        type: String
    },
    IncomeProtection:{
        type: String
    },
    MonthlyBenefit:{
        type: Number
    },
    WaitingPeriod:{
        type: String
    },
    BenefitPeriod:{
        type: String
    },
    Indemnity:{
        type: String
    },
    CostPA_2:{
        type: Number
    },
    PremiumType_2:{
        type: String
    },
    Includes_SuperContinuance:{
        type: String
    },
    BenefitIndexed:{
        type: String
    },
    LoadingExecutions_2:{
        type: String
    },
    LoadingExecutions_2_Details:{
        type: String
    }
});

module.exports = Mongoose.model("Client_Super_InsuranceDetails", Super_InsuranceSchema);