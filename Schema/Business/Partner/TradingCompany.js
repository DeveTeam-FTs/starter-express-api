const Joi = require("joi");

const Partner_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** PRIVATE COMPANY **********************************
clientStructureType: Joi.string(),
clientOwner: Joi.string(), 
partnerTCName: Joi.string(), 
partnerTCABN: Joi.string(), 
partnerTCACN: Joi.number(), 
partnerTCAddress: Joi.string(), 
partnerTCDirectors: Joi.number(), 
partnerTCDirectorship: Joi.string(),
partnerTCShares: Joi.number(),
partnerTCDividend: Joi.number(), 
partnerTCEquity: Joi.number()
    });
    return schema.validate(Business);
};

module.exports = Partner_BusinessSchema;