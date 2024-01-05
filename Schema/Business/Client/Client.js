const Joi = require("joi");

const Client_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//***
clientStructureType: Joi.string(),
    clientOwner: Joi.string(), 
    // Sole Trader 
   
    clientSTBusinessName: Joi.string(), 
    clientSTABN: Joi.string(), 
    clientSTBusinessAddress: Joi.string(), 
    clientSTBusinessIncome: Joi.number(), 
    clientSTGoodwill: Joi.number(), 
    
    // Partnershiip
    
    clientPartnershipName: Joi.string(), 
    clientPartnershipABN: Joi.string(), 
    clientPartnershipAddress: Joi.string(), 
    clientPartnershipIncome: Joi.number(), 
    clientPartnershipPartnership: Joi.number(), 
    clientPartnershipShareIncome: Joi.number(), 
    clientPartnershipGoodwill: Joi.number(), 
   
    // Trading Company
  
    clientTCName: Joi.string(), 
    clientTCABN: Joi.string(), 
    clientTCACN: Joi.number(), 
    clientTCAddress: Joi.string(), 
    clientTCDirectors: Joi.number(), 
    clientTCDirectorship: Joi.string(),
    clientTCShares: Joi.number(),
    clientTCDividend: Joi.number(), 
    clientTCEquity: Joi.number(),
    
    // Business Trust
   
    clientBTName: Joi.string(), 
    clientBTABN: Joi.string(), 
    clientBTAddress: Joi.string(), 
    clientBTTrustee: Joi.string(), 
    clientBTTrusteeName: Joi.string(), 
    clientBTDistribution: Joi.number(), 
    clientBTOwnership: Joi.number(), 
    clientBTBusiness: Joi.number(), 
    
    // Bucket Company
    
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