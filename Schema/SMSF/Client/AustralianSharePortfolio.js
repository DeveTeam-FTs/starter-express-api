const Joi = require('joi');

const AustralianSharePortfolio = (AustralianSharePortfolio) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        AustralianPortfolioLoanType: Joi.string(),
        AustralianPortfolioCurrentBalance: Joi.number(),
        AustralianPortfolioLender: Joi.string(),
        AustralianPortfolioRepaymentAmount: Joi.number(),
        AustralianPortfolioFrequency: Joi.string(),
        AustralianPortfolioAnnualRepayment: Joi.number(),
        AustralianInterestRatePA: Joi.number(),
        AustralianPortfolioLoanTerm: Joi.string(),
        AustralianPortfolioLoanType2: Joi.string(),
        AustralianPortfolioDeductibleLoanAmount: Joi.number(),
        AustralianPortfolioYearRemaining: Joi.string()
    });
    return schema.validate(AustralianSharePortfolio);
};

module.exports = AustralianSharePortfolio;