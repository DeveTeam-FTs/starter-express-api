const Mongoose = require("mongoose");



const PartnerInsuranceSchemaLife = new Mongoose.Schema({
    Email:{
        type: String
    },
    Life_PolicyID:{
        type: Number
    },
    Life:{
        type:String
    },
    LifeInput:{
        type: Number
    },
    TPD:{
        type:String
    },
    TPDInput:{
        type: Number
    },
    Trauma:{
        type:String
    },
    TraumaInput:{
        type: Number
    },
    Life_PolicyOwner:{
        type: String
    },
    Life_Insured:{
        type: String
    },
    Life_InsuranceCompany:{
        type: String
    },
    Life_InsuranceProduct:{
        type: String
    },
    Life_PolicyNumber:{
        type: Number
    },
    Life_PolicyDateCommenced:{
        type: String
    },
    Life_PolicyDateRenewal:{
        type: String
    },
    Life_Smoker:{
        type: Boolean
    },
    Life_PremiumType:{
        type: String
    },
    Life_PremiumPA:{
        type: Number
    },
    Life_CPI_Indexed:{
        type: String
    },
    Life_SuperannuationPolicy:{
        type: String
    },
    Life_ContinuationPolicy:{
        type: String
    },
    Life_LoadingExecutions:{
        type: String
    },
    Life_Details_LoadingExecutions:{
        type: String
    },

});

module.exports = Mongoose.model("PartnerInsuranceSchemaLife", PartnerInsuranceSchemaLife);