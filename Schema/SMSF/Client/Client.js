const Joi = require('joi');

const Clients = (Clients) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Accumulation: Joi.string(),
        PensionAccount: Joi.string(),
        BankAccount: Joi.string(),
        TermDepositAccount: Joi.string(),
        AustralianShareMarket: Joi.string(),
        AustralianSharePortfolio: Joi.string(),
        ManagedFunds: Joi.string(),
        ManagedFundsPortfolio: Joi.string(),
        InvestmentProperties: Joi.string()
    });
    return schema.validate(Clients);
};

module.exports = Clients;