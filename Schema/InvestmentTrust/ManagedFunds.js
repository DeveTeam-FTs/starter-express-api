const Joi = require('joi');

const ManagedFunds = (ManagedFunds) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        PlatformName: Joi.string(),
        InvestmentName: Joi.string(),
        NoOfShares: Joi.number(),
        CurrentSharePrice: Joi.number(),
        CurrentShareValue: Joi.number(),
        OriginalInvestment: Joi.number(),
        PurchaseDate: Joi.string(),
        IncomePA: Joi.number(),
        IncomePAType: Joi.string(),
        TotalIncomePA: Joi.number(),
        ReinvestIncome: Joi.string(),
        RegInvestmentsPA: Joi.number()
    });
    return schema.validate(ManagedFunds);
};

module.exports = ManagedFunds;