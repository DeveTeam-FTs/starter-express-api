const Joi = require("joi");

const partner_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** Bucket COMPANY **********************************
    clientStructureType: Joi.string(),
    clientOwner: Joi.string(),
    partnerBCCHolding: Joi.number(), 
    partnerBCPHolding: Joi.number(), 
    partnerBCName: Joi.string(), 
    partnerBCACN: Joi.string(), 
    partnerBCAddress: Joi.string(), 
    partnerBCCDirectorship: Joi.number(), 
    partnerBCPDirectorship: Joi.string(), 
    partnerBCCDividend: Joi.number(), 
    partnerBCPDividend: Joi.number(), 
    partnerBCCEquity: Joi.number(), 
    partnerBCPEquity: Joi.number(), 

      
    });
    return schema.validate(Business);
};

module.exports = partner_BusinessSchema;