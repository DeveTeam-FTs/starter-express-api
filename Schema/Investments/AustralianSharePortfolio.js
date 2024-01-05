const Joi = require('joi');

const AustralainMarketPortfolio = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
    Email: Joi.string().required(), 
    AustralianPortfolioLoanType: Joi.string(),
    AustralianPortfolioCurrentBalance: Joi.number(),
    AustralianPortfolioLender: Joi.string(),
    AustralianInterestRatePA: Joi.number(),
    AustralianPortfolioLoanTerm: Joi.string(),
    AustralianPortfolioLoanType2: Joi.string(),
    AustralianPortfolioDeductibleLoanAmount: Joi.string(),
    AustralianPortfolioYearRemaining: Joi.string(),
    AustralianPortfolioDeductibleRepaymentsAmount: Joi.number(),
    AustralianPortfolioDeductibleFrequency: Joi.number(),
    AustralianPortfolioDeductibleAnnualRepayments: Joi.number(),
    AustralianPortfolioDeductibleMonthlyContributions: Joi.number(),
    AustralianPortfolioDeductibleTotalAnnualContributions: Joi.number()

    });
    return Schema.validate(Share);
};

module.exports = AustralainMarketPortfolio;
