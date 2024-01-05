const Joi = require("joi");

const Partner_EstatePlanning = (Estate) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        POA_Type: Joi.string(),
        POA_OtherDescription: Joi.string(),
        POA_ReviewDate: Joi.string(),
        POA_Location: Joi.string(),
        POA_1: Joi.string(),
        POA_2: Joi.string(),
        POA_3: Joi.string(),
        POA_4: Joi.string(),
        POA_5: Joi.string(),
        Relationship_1: Joi.string(),
        Relationship_2: Joi.string(),
        Relationship_3: Joi.string(),
        Relationship_4: Joi.string(),
        Relationship_5: Joi.string()
    });
    return schema.validate(Estate);
};

module.exports = Partner_EstatePlanning;