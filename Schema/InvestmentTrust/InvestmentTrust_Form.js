const Joi = require('joi');

const InvestmentTrust_Form = (InvestmentTrust_Form) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        FamilyTrustName: Joi.string(),
        TrustType: Joi.string(),
        ABN: Joi.string(),
        CorporateTrusteeName:Joi.string(),
        CashDistribution: Joi.string(),
        EstablishmentDate: Joi.string(),
        AccountantName: Joi.string(),
        TrusteeType: Joi.string(),
        TotalDirectors: Joi.number(),
        Director1Name: Joi.string(),
        Director2Name: Joi.string(),
        Director3Name: Joi.string(),
        Director4Name: Joi.string(),
        AustralianSharePortfolio:Joi.string(),
        ManagedFunds:Joi.string()
    });
    return schema.validate(InvestmentTrust_Form);
};

module.exports = InvestmentTrust_Form;