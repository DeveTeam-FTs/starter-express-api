const Joi = require("joi");

const Partner_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** SOLE TRADER **********************************
clientStructureType: Joi.string(),
clientOwner: Joi.string(), 
partnerSTBusinessName: Joi.string(), 
partnerSTABN: Joi.string(), 
partnerSTBusinessAddress: Joi.string(), 
partnerSTBusinessIncome: Joi.number(), 
partnerSTGoodwill: Joi.number()

    });
    return schema.validate(Business);
};

module.exports = Partner_BusinessSchema;