const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().min(1).max(5000000000).required(),
        Annuities_ProductProvider: Joi.string().min(1).max(5000000000),
        Annuities_InvestmentAmount: Joi.number().min(1).max(5000000000),
        Annuities_CurrentValue: Joi.number().min(1).max(5000000000),
        Annuities_AnnuityType: Joi.string().min(1).max(5000000000),
        Annuities_RCV: Joi.number().min(1).max(5000000000),
        Annuities_Term: Joi.number().min(1).max(5000000000),
        Annuities_YearsUntilMaturity: Joi.number().min(1).max(5000000000),
        Annuities_RegularIncome: Joi.number().min(1).max(5000000000),
        Annuities_Frequency: Joi.string().min(1).max(5000000000),
        Annuities_AnnualInflation: Joi.string().min(1).max(5000000000),
        Annuities_Other: Joi.string().min(1).max(5000000000)

// ************************* End of Annuitites *************************




    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;