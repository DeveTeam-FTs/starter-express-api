const Joi = require('joi');

const Accumulation = (Accumulation) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        MemberName: Joi.string(),
        EligibleDate: Joi.string(),
        CurrentBalance: Joi.number(),
        TaxFree: Joi.number(),
        Taxed: Joi.number(),
        NonPreservedRestriction: Joi.number(),
        NonPreservedUnRestriction: Joi.number(),
        PreservedAmount: Joi.number()
    });
    return schema.validate(Accumulation);
};

module.exports = Accumulation;