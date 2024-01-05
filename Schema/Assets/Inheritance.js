const Joi = require("joi");

const ClientPersonalAssetsSchema = (Assets) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
// ******************************** Personal Assets - Assets ********************************
InheritanceDescription: Joi.string(),
InheritanceYear: Joi.string(),
InheritanceAmount: Joi.number(),

// ******************************** End of Personal Assets - Assets ********************************
    });
    return schema.validate(Assets);
};

module.exports = ClientPersonalAssetsSchema;