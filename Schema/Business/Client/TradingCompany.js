const Joi = require("joi");

const Client_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** PRIVATE COMPANY **********************************
clientStructureType: Joi.string(),
clientOwner: Joi.string(), 
clientTCName: Joi.string(), 
clientTCABN: Joi.string(), 
clientTCACN: Joi.number(), 
clientTCAddress: Joi.string(), 
clientTCDirectors: Joi.number(), 
clientTCDirectorship: Joi.string(),
clientTCShares: Joi.number(),
clientTCDividend: Joi.number(), 
clientTCEquity: Joi.number()
    });
    return schema.validate(Business);
};

module.exports = Client_BusinessSchema;