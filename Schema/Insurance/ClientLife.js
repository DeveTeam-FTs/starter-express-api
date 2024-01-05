const Joi = require("joi");

const Client_InsuranceSchema = (Insurance) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Life_PolicyID: Joi.number(),
        Life:Joi.string(),
        LifeInput:Joi.number(),
        TPD:Joi.string(),
        TPDInput:Joi.number(),
        Trauma:Joi.string(),
        TraumaInput:Joi.number(),       
        Life_PolicyOwner: Joi.string(),
        Life_Insured: Joi.string(),
        Life_InsuranceCompany: Joi.string(),
        Life_InsuranceProduct: Joi.string(),
        Life_PolicyNumber: Joi.number(),
        Life_PolicyDateCommenced: Joi.string(),
        Life_PolicyDateRenewal: Joi.string(),
        Life_Smoker: Joi.bool(),
        Life_PremiumType: Joi.string(),
        Life_PremiumPA: Joi.number(),
        Life_CPI_Indexed: Joi.string(),
        Life_SuperannuationPolicy: Joi.string(),
        Life_ContinuationPolicy: Joi.string(),
        Life_LoadingExecutions: Joi.string(),
        Life_Details_LoadingExecutions: Joi.string(),

});
    return schema.validate(Insurance);
};

module.exports = Client_InsuranceSchema;