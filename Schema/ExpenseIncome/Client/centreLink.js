const Joi = require("joi");

const Client_CentreLinkSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
        clientCLApa: Joi.number(),  
        clientCLCDate: Joi.string(),  
        clientCLCard: Joi.string(),  
        clientCLCarerAllowance: Joi.string(),  
        clientCLClp: Joi.string(),  
        clientCLCrn: Joi.string(),  
        clientCLFamilyTax: Joi.string(),  
        clientCLGifts: Joi.string(),  
        clientCLHowMuch: Joi.number(),  
        clientCLOwner: Joi.string(),  
        clientCLPa: Joi.number(),  
        clientCLYears: Joi.string(),
        clientCLRent: Joi.string(),
        clientCLFtb: Joi.string(),

  

    });
    return schema.validate(ExpenseIncome);
};

module.exports = Client_CentreLinkSchema;