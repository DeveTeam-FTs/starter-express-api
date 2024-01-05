const Joi = require('joi');

const SMSFForm = (SMSFForm) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        FundName: Joi.string(),
        FundType: Joi.string(),
        ABN: Joi.number(),
        TrusteeType: Joi.string(),
        EstablishmentDate: Joi.string(),
        AssetsSegregated: Joi.string(),
        InvestmentBorrowing: Joi.string(),
        AcquireInsurances: Joi.string(),
        AccountantName: Joi.string(),
        AuditorName: Joi.string(),
        AccountingAuditing: Joi.number(),
        ATOLevy: Joi.number(),
        SMSFTrusteeName: Joi.string(),

    });
    return schema.validate(SMSFForm);
};

module.exports = SMSFForm;