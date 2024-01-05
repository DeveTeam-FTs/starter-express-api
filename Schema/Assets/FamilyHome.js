const Joi = require("joi");

const ClientFamilyHomeSchema = (Assets) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
//******************************** Family Home - Assets ********************************
        HomeNO: Joi.number(),
        CurrentValue: Joi.number(),
        ClientOwnership: Joi.number(),
        PartnerOwnership: Joi.number(),
        CostBase: Joi.number(),
        Address: Joi.string(),
        Postcode: Joi.number(),
        AmountAssessed: Joi.number(),
        PropertyLoan: Joi.string(),
        ClientBorrowingPercentage: Joi.number(),
        PartnerBorrowingPercentage: Joi.number(),
        CurrentBalance: Joi.number(),
        RepaymentAmounts: Joi.number(),
        Frequency: Joi.string(),
        AnnualRepayments: Joi.number(),
        InterestRate: Joi.number(),
        LoanTerm: Joi.string(),
        LoanType: Joi.string(),
        YearsRemaining: Joi.string(),
// ******************************** End of Family Home - Assets ********************************
    });
    return schema.validate(Assets);
};

module.exports = ClientFamilyHomeSchema;