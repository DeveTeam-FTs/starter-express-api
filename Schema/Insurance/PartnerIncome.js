const Joi = require("joi");

const Partner_InsuranceSchemaIncome = (Insurance) => {
    const schema = Joi.object({
    Email: Joi.string().required(),
    Income_PolicyID: Joi.number(),
    Income_PolicyOwner: Joi.string(),
    Income_LifeInsured: Joi.string(),
    Income_InsuranceCompany: Joi.string(),
    Income_InsuranceProduct: Joi.string(),
    Income_PolicyNumber: Joi.number(),
    Income_PolicyDateCommenced: Joi.string(),
    Income_PolicyDateRenewal: Joi.string(),
    Income_Smoker: Joi.bool(),
    Income_MonthlyBenefit: Joi.number(),
    Income_ContinuanceAmount: Joi.number(),
    Income_WaitingPeriod: Joi.string(),
    Income_BenefitPeriod: Joi.string(),
    Income_Agreed: Joi.string(),
    Income_PremiumType: Joi.string(),
    Income_PremiumPA: Joi.number(),
    Income_SuperannuationPolicy: Joi.string(),
    Income_Accident: Joi.string(),
    Income_IncreasingClaim: Joi.string(),
    Income_TPD: Joi.string(),
    Income_BenefitIndexed: Joi.string(),
    Income_LoadingExecutions: Joi.string(),
    Income_Details_LoadingExecutions: Joi.string()
// ****************************** End of Income Protection Details ******************************
  
});
    return schema.validate(Insurance);
};

module.exports = Partner_InsuranceSchemaIncome;