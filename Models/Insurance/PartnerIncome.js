const Mongoose = require("mongoose");

const PartnerInsuranceSchemaIncome = new Mongoose.Schema({
    Email:{
        type: String
    },
    Income_PolicyID:{
        type: Number
    },
    Income_PolicyOwner:{
        type: String
    },
    Income_LifeInsured:{
        type: String
    },
    Income_InsuranceCompany:{
        type: String
    },
    Income_InsuranceProduct:{
        type: String
    },
    Income_PolicyNumber:{
        type: Number
    },
    Income_PolicyDateCommenced:{
        type: String
    },
    Income_PolicyDateRenewal:{
        type: String
    },
    Income_Smoker:{
        type: Boolean
    },
    Income_MonthlyBenefit:{
        type: Number
    },
    Income_ContinuanceAmount:{
        type: Number
    },
    Income_WaitingPeriod:{
        type: String
    },
    Income_BenefitPeriod:{
        type: String
    },
    Income_Agreed:{
        type: String
    },
    Income_PremiumType:{
        type: String
    },
    Income_PremiumPA:{
        type: Number
    },
    Income_SuperannuationPolicy:{
        type: String
    },
    Income_Accident:{
        type: String
    },
    Income_IncreasingClaim:{
        type: String
    },
    Income_TPD:{
        type: String
    },
    Income_BenefitIndexed:{
        type: String
    },
    Income_LoadingExecutions:{
        type: String
    },
    Income_Details_LoadingExecutions:{
        type: String
    }
});

module.exports = Mongoose.model("PartnerInsuranceSchemaIncome", PartnerInsuranceSchemaIncome);