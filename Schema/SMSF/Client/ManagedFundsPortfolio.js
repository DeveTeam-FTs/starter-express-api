const Joi = require('joi');

const ManagedFundsPortfolio = (ManagedFundsPortfolio) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        ManagedFundsPortfolioLoanType: Joi.string(),
        ManagedFundsPortfolioCurrentBalance: Joi.number(),
        ManagedFundsPortfolioLender: Joi.string(),
        ManagedFundsPortfolioRepaymentAmount: Joi.number(),
        ManagedFundsPortfolioFrequency: Joi.string(),
        ManagedFundsPortfolioAnnualRepayments: Joi.number(),
        ManagedFundsPortfolioInterestRatePA: Joi.number(),
        ManagedFundsPortfolioLoanTerm: Joi.string(),
        ManagedFundsPortfolioLoanType2: Joi.string(),
        ManagedFundsPortfolioDeductibleLoanAmount: Joi.number(),
        ManagedFundsPortfolioYearRemaining: Joi.string()
    });
    return schema.validate(ManagedFundsPortfolio);
};

module.exports = ManagedFundsPortfolio;