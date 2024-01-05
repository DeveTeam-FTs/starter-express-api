const Joi = require('joi');

const PensionAccounts = (PensionAccounts) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        MemberName: Joi.string(),
        PensionType: Joi.string(),
        CommencementDateDate: Joi.string(),
        CurrentBalance: Joi.number(),
        TaxFree: Joi.number(),
        Taxed: Joi.number(),
        OriginalPurchasePrice: Joi.number(),
        Frequency: Joi.string(),
        RegularIncomeDrawn: Joi.number(),
        MinimumRequired: Joi.number(),
        RelevantNumber: Joi.number(),
        LumpsumTaken: Joi.number(),
        DeductibleAmount: Joi.number(),
        PensionMaximum: Joi.number()

    });
    return schema.validate(PensionAccounts);
};

module.exports = PensionAccounts;