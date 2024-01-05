const Joi = require("joi");

const Client_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** Bucket COMPANY **********************************
    clientStructureType: Joi.string(),
    clientOwner: Joi.string(),
    clientBCCHolding: Joi.number(), 
    clientBCPHolding: Joi.number(), 
    clientBCName: Joi.string(), 
    clientBCACN: Joi.string(), 
    clientBCAddress: Joi.string(), 
    clientBCCDirectorship: Joi.number(), 
    clientBCPDirectorship: Joi.string(), 
    clientBCCDividend: Joi.number(), 
    clientBCPDividend: Joi.number(), 
    clientBCCEquity: Joi.number(), 
    clientBCPEquity: Joi.number(), 

      
    });
    return schema.validate(Business);
};

module.exports = Client_BusinessSchema;