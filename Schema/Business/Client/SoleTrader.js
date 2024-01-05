const Joi = require("joi");

const Client_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** SOLE TRADER **********************************
clientStructureType: Joi.string(),
clientOwner: Joi.string(), 
clientSTBusinessName: Joi.string(), 
clientSTABN: Joi.string(), 
clientSTBusinessAddress: Joi.string(), 
clientSTBusinessIncome: Joi.number(), 
clientSTGoodwill: Joi.number()

    });
    return schema.validate(Business);
};

module.exports = Client_BusinessSchema;