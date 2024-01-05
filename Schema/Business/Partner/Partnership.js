const Joi = require("joi");

const PartnershipPartner_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        
//********************************** PARTNERSHIP **********************************
    clientStructureType: Joi.string(),
    clientOwner: Joi.string(),
    partnerPartnershipName: Joi.string(), 
    partnerPartnershipABN: Joi.string(), 
    partnerPartnershipAddress: Joi.string(), 
    partnerPartnershipIncome: Joi.number(), 
    partnerPartnershipPartnership: Joi.number(), 
    partnerPartnershipShareIncome: Joi.number(), 
    partnerPartnershipGoodwill: Joi.number(), 
    });
    return schema.validate(Business);
};

module.exports = PartnershipPartner_BusinessSchema;