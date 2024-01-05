const Joi = require("joi");

const BusinessTrustPartner_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
 //********************************** BUSINESS TRUST **********************************
 clientStructureType: Joi.string(),
 clientOwner: Joi.string(), 
 partnerBTName: Joi.string(), 
 partnerBTABN: Joi.string(), 
 partnerBTAddress: Joi.string(), 
 partnerBTTrustee: Joi.string(), 
 partnerBTTrusteeName: Joi.string(),
 partnerBTDistribution: Joi.number(), 
 partnerBTOwnership: Joi.number(), 
 partnerBTBusiness: Joi.number()
    });
    return schema.validate(Business);
};

module.exports = BusinessTrustPartner_BusinessSchema;