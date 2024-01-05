const Joi = require('joi');

const InvestmentProperties = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        Email:Joi.string().required(),
        InvestmentPropertiesCurrentValue: Joi.number(),
        InvestmentPropertiesClientOwnership: Joi.number(),
        InvestmentPropertiesCostBase: Joi.number(),
        InvestmentPropertiesAddress: Joi.string(),
        InvestmentPropertiesPostcode: Joi.number(),
        InvestmentPropertiesRentalIncome: Joi.number(),
        InvestmentPropertiesFrequency: Joi.string(),
        InvestmentPropertiesTotalAnnualIncome: Joi.number(),
        InvestmentPropertiesExpensesPA: Joi.number(),
        InvestmentPropertiesLoanAttached: Joi.string(),
        InvestmentPropertiesCurrentBalance: Joi.number(),
        InvestmentPropertiesClientBorrowing: Joi.number(),
        InvestmentPropertiesLender: Joi.string(),
        InvestmentPropertiesRepaymentAmount: Joi.number(),
        InvestmentPropertiesFrequency2: Joi.string(),
        InvestmentPropertiesAnnualRepayment: Joi.number(),
        InvestmentPropertiesInterestRatePA: Joi.number(),
        InvestmentPropertiesLoanTerm: Joi.string(),
        InvestmentPropertiesLoanType: Joi.string(),
        InvestmentPropertiesDebtLoanAmount: Joi.number(),
        InvestmentPropertiesYearsRemaining: Joi.string(),
        InvestmentPropertiesPartnerBorrowing: Joi.number(),
        InvestmentPropertiesPartnerOwnership: Joi.number(),

    });
    return Schema.validate(Share);
};

module.exports = InvestmentProperties;