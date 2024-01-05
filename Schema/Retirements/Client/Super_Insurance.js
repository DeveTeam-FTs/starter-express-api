const Joi = require("joi");

const Super_InsuranceSchema = (Insurance) => {
    const schema = Joi.object({
        Email: Joi.string(),
        InsuranceAttached: Joi.string(),
        Life_TPD_Insurance: Joi.string(),
        CoverType: Joi.string(),
        LifeCover: Joi.number(),
        TPDCover: Joi.number(),
        CostPA: Joi.number(),
        PremiumType: Joi.string(),
        LoadingExecutions: Joi.string(),
        LoadingExecution_Details: Joi.string(),
        IncomeProtection: Joi.string(),
        MonthlyBenefit: Joi.number(),
        WaitingPeriod: Joi.string(),
        BenefitPeriod: Joi.string(),
        Indemnity: Joi.string(),
        CostPA_2: Joi.number(),
        PremiumType_2: Joi.string(),
        Includes_SuperContinuance: Joi.string(),
        BenefitIndexed: Joi.string(),
        LoadingExecutions_2: Joi.string(),
        LoadingExecutions_2_Details: Joi.string()
    })
    return schema.validate(Insurance)
};

module.exports = Super_InsuranceSchema