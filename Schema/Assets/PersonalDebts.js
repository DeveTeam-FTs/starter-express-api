const Joi = require("joi");

const ClientPersonalDebtsSchema = (Assets) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
// ******************************** Personal Debts - Assets ********************************
PLDebtType: Joi.string(),
PLCurrentBalance: Joi.number(),
PLRepaymentAmount: Joi.number(),
PLFrequency: Joi.string(),
PLAnnualRepayment: Joi.number(), // chek front
PLInterestRate: Joi.number(),
PLLoanTerm: Joi.string(), 
PLLoanType: Joi.string(),
PLYearRemaining: Joi.string(),

      
// ******************************** End of Personal Debts - Assets ********************************
    });
    return schema.validate(Assets);
};

module.exports = ClientPersonalDebtsSchema;