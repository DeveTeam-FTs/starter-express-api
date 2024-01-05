const Joi = require("joi");

const Client_InsuranceSchema = (Insurance) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Income_PolicyID: Joi.number().min(1).max(5000000000),
        Income_PolicyOwner: Joi.string().min(1).max(5000000000),
        Income_LifeInsured: Joi.string().min(1).max(5000000000),
        Income_InsuranceCompany: Joi.string().min(1).max(5000000000),
        Income_InsuranceProduct: Joi.string().min(1).max(5000000000),
        Income_PolicyNumber: Joi.number().min(1).max(5000000000),
        Income_PolicyDateCommenced: Joi.string().min(1).max(5000000000),
        Income_PolicyDateRenewal: Joi.string().min(1).max(5000000000),
        Income_Smoker: Joi.boolean(),
        Income_MonthlyBenefit: Joi.number().min(1).max(5000000000),
        Income_ContinuanceAmount: Joi.number().min(1).max(5000000000),
        Income_WaitingPeriod: Joi.string().min(1).max(5000000000),
        Income_BenefitPeriod: Joi.string().min(1).max(5000000000),
        Income_Agreed: Joi.string().min(1).max(5000000000),
        Income_PremiumType: Joi.string().min(1).max(5000000000),
        Income_PremiumPA: Joi.number().min(1).max(5000000000),
        Income_SuperannuationPolicy: Joi.string().min(1).max(5000000000),
        Income_Accident: Joi.string().min(1).max(5000000000),
        Income_IncreasingClaim: Joi.string().min(1).max(5000000000),
        Income_TPD: Joi.string().min(1).max(5000000000),
        Income_BenefitIndexed: Joi.string().min(1).max(5000000000),
        Income_LoadingExecutions: Joi.string().min(1).max(5000000000),
        Income_Details_LoadingExecutions: Joi.string().min(1).max(5000000000),
// ****************************** End of Income Protection Details ******************************
    });
    return schema.validate(Insurance);
};

module.exports = Client_InsuranceSchema;