const Joi = require('joi');

const InvestmentProperties = (InvestmentProperties) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        CurrentValue: Joi.number(),
        CostBase: Joi.number(),
        PropertyAddress: Joi.string(),
        PostCode: Joi.number(),
        RentalIncome: Joi.number(),
        Frequency: Joi.string(),
        TotalAnnualIncome: Joi.number(),
        ExpensesPA: Joi.number(),
        LoanAttached: Joi.string(),
        CurrentBalance: Joi.number(),
        Lender: Joi.string(),
        RepaymentAmount: Joi.number(),
        Frequency2: Joi.string(),
        AnnualRepayments: Joi.number(),
        InterestRatePA: Joi.number(),
        LoanTerm: Joi.string(),
        LoanType: Joi.string(),
        DebtAmountLoan: Joi.number(),
        YearsRemaining: Joi.string()
    });
    return schema.validate(InvestmentProperties);
};

module.exports = InvestmentProperties;