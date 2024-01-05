const Joi = require('joi');

const ManagedFundsPortfolio = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        Email: Joi.string().required(), 
        ManagedFundsPortfolioLoanType: Joi.string(),
        ManagedFundsPortfolioCurrentBalance: Joi.number(),
        ManagedFundsPortfolioLender: Joi.string(),
        ManagedFundsPortfolioInterestRatePA: Joi.number(),
        ManagedFundsPortfolioLoanTerm: Joi.string(),
        ManagedFundsPortfolioLoanType2: Joi.string(),
        ManagedFundsPortfolioDeductibleLoanAmount: Joi.number(),
        ManagedFundsPortfolioYearRemaining: Joi.string(),
        ManagedFundsPortfolioRepaymentsAmount: Joi.number(),
        ManagedFundsPortfolioFrequency: Joi.number(),
        ManagedFundsPortfolioAnnualRepayments: Joi.number(),
        ManagedFundsPortfolioMonthlyContributions: Joi.number(),
        ManagedFundsPortfolioTotalAnnualContributions: Joi.number(),

    });
    return Schema.validate(Share);
};

module.exports = ManagedFundsPortfolio;