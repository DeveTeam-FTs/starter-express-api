const Joi = require("joi");

const ClientAssetSchema = (Assets) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        FamilyHome: Joi.string().required(),
        PersonalAssets: Joi.string().required(),
        PersonalDebts: Joi.string().required()
    });
    return schema.validate(Assets);
};

module.exports = ClientAssetSchema;