const Joi = require("joi");

const partner_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//***

    // Sole Trader 
  
    partnerSTBusinessName: Joi.string(), 
    partnerSTABN: Joi.string(), 
    partnerSTBusinessAddress: Joi.string(), 
    partnerSTBusinessIncome: Joi.number(), 
    partnerSTGoodwill: Joi.number(), 
    
    // Partnershiip
   
    partnerPartnershipName: Joi.string(), 
    partnerPartnershipABN: Joi.string(), 
    partnerPartnershipAddress: Joi.string(), 
    partnerPartnershipIncome: Joi.number(), 
    partnerPartnershipPartnership: Joi.number(), 
    partnerPartnershipShareIncome: Joi.number(), 
    partnerPartnershipGoodwill: Joi.number(), 
   
    // Trading Company
    
    partnerTCName: Joi.string(), 
    partnerTCABN: Joi.string(), 
    partnerTCACN: Joi.number(), 
    partnerTCAddress: Joi.string(), 
    partnerTCDirectors: Joi.number(), 
    partnerTCDirectorship: Joi.string(),
    partnerTCShares: Joi.number(),
    partnerTCDividend: Joi.number(), 
    partnerTCEquity: Joi.number(),
    
    // Business Trust
   
    partnerBTName: Joi.string(), 
    partnerBTABN: Joi.string(), 
    partnerBTAddress: Joi.string(), 
    partnerBTTrustee: Joi.string(), 
    partnerBTTrusteeName: Joi.string(), 
    partnerBTDistribution: Joi.number(), 
    partnerBTOwnership: Joi.number(), 
    partnerBTBusiness: Joi.number(), 
    
    // Bucket Company
  
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