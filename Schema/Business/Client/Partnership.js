const Joi = require("joi");

const PartnershipClient_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        
//********************************** PARTNERSHIP **********************************
    clientStructureType: Joi.string(),
    clientOwner: Joi.string(),
    clientPartnershipName: Joi.string(), 
    clientPartnershipABN: Joi.string(), 
    clientPartnershipAddress: Joi.string(), 
    clientPartnershipIncome: Joi.number(), 
    clientPartnershipPartnership: Joi.number(), 
    clientPartnershipShareIncome: Joi.number(), 
    clientPartnershipGoodwill: Joi.number(), 
    });
    return schema.validate(Business);
};

module.exports = PartnershipClient_BusinessSchema;