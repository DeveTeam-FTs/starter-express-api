const Joi = require("joi");

const ChildSchema = (Child) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        childSurname: Joi.string(),
        childGivenName: Joi.string(),
        childDoB: Joi.string(),
        childAge: Joi.number(),
        childGender: Joi.string(),
        childRelationship: Joi.string(),
        childDependentRadio: Joi.string(),
        childDependantUntilAge: Joi.number(),
        
    });
    return schema.validate(Child);
};

module.exports = ChildSchema;  