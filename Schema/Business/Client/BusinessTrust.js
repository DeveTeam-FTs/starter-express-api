const Joi = require("joi");

const BusinessTrustClient_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
 //********************************** BUSINESS TRUST **********************************
 clientStructureType: Joi.string(),
 clientOwner: Joi.string(), 
 clientBTName: Joi.string(), 
 clientBTABN: Joi.string(), 
 clientBTAddress: Joi.string(), 
 clientBTTrustee: Joi.string(), 
 clientBTTrusteeName: Joi.string(),
 clientBTDistribution: Joi.number(), 
 clientBTOwnership: Joi.number(), 
 clientBTBusiness: Joi.number()
    });
    return schema.validate(Business);
};

module.exports = BusinessTrustClient_BusinessSchema;