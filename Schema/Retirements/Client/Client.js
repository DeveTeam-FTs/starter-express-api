const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Super: Joi.string(),
        AccountPension: Joi.string(),
        Annuities: Joi.string(),
        LifetimePension: Joi.string(),
        Super2: Joi.string(),
        AccountPension2: Joi.string(),
        Annuities2: Joi.string(),
        LifetimePension2: Joi.string()
    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;