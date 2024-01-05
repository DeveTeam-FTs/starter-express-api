const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Annuities_ProductProvider: Joi.string(),
        Annuities_InvestmentAmount: Joi.number(),
        Annuities_CurrentValue: Joi.number(),
        Annuities_AnnuityType: Joi.string(),
        Annuities_RCV: Joi.number(),
        Annuities_Term: Joi.number(),
        Annuities_YearsUntilMaturity: Joi.number(),
        Annuities_RegularIncome: Joi.number(),
        Annuities_Frequency: Joi.string(),
        Annuities_AnnualInflation: Joi.string()
    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;