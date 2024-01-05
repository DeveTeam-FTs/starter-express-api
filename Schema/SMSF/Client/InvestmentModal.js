const Joi = require('joi');

const myClient = (myClient) => {
    const schema = Joi.object({
        Email:Joi.string().required(),
        TotalExpense: Joi.number(),
        CorporateFees:Joi.number(),
        CouncilRates:Joi.number(),
        LawnMoving:Joi.number(),
        Insurance:Joi.number(),
        LandTax:Joi.number(),
        Repairs:Joi.number(),
        WaterCharges:Joi.number(),
        Others:Joi.number(),
        Telephone:Joi.number(),
        ProfessionalFees:Joi.number(),
        AllOthers:Joi.number()  
    });
    return schema.validate(myClient);
};

module.exports = myClient;