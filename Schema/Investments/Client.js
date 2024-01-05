const Joi = require("joi");

const ClientInvestment = (Investment) => {
    const schema = Joi.object({
        //Email added by usama
        Email: Joi.string().required(), 
        BankAccounts: Joi.string(),
        TermDeposits: Joi.string(),
        AustralianShareMarket: Joi.string(),
        AustralianSharePortfolio: Joi.string(),
        ManagedFunds: Joi.string(),
        ManagedFundsPortfolio: Joi.string(),
        InvestmentBonds: Joi.string(),
        InvestmentProperties: Joi.string(),
        Others: Joi.string()
    });
    return schema.validate(Investment)
}

module.exports = ClientInvestment;