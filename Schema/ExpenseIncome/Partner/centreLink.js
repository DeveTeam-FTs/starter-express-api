const Joi = require("joi");

const Partner_CentreLinkSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
        partnerCLApa: Joi.number(),  
        partnerCLCDate: Joi.string(),  
        partnerCLCard: Joi.string(),  
        partnerCLCarerAllowance: Joi.string(),  
        partnerCLClp: Joi.string(),  
        partnerCLCrn: Joi.string(),  
        partnerCLFamilyTax: Joi.string(),  
        partnerCLGifts: Joi.string(),  
        partnerCLHowMuch: Joi.number(),  
        partnerCLOwner: Joi.string(),  
        partnerCLPa: Joi.number(),  
        partnerCLYears: Joi.string(),
        partnerCLRent: Joi.string(),
        partnerCLFtb: Joi.string(),

  

    });
    return schema.validate(ExpenseIncome);
};

module.exports = Partner_CentreLinkSchema;