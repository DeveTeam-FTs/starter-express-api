const Joi = require('joi');

const Others = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        Email:Joi.string().required(),    
        OtherInvestmentName: Joi.string(),
        OtherCurrentValue: Joi.number(),
        OtherCostBase: Joi.number(),
        OtherPurchaseDate: Joi.string(),
        OtherIncomePA: Joi.number(),
        OtherIncomePAType: Joi.string(),
        OtherTotalIncomePA: Joi.number(),
        OtherReinvestedIncome: Joi.string(),
        OtherRegularInvestmentsPA: Joi.number(),
        OtherInvestmentName2: Joi.string(),
        OtherCurrentValue2: Joi.number(),
        OtherCostBase2: Joi.number(),
        OtherPurchaseDate2: Joi.string(),
        OtherIncomePA2: Joi.number(),
        OtherIncomePAType2: Joi.string(),
        OtherTotalIncomePA2: Joi.number(),
        OtherReinvestedIncome2: Joi.string(),
        OtherRegularInvestmentsPA2: Joi.number()
    });
    return Schema.validate(Share);
};

module.exports = Others;