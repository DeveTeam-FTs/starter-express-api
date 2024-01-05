const Joi = require("joi");

const Partner_OtherIncomeSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
        partnerOtherOwner: Joi.string(),
        partnerOtherIncomeType: Joi.string(),
        partnerOtherAmount: Joi.number()

         
  

    });
    return schema.validate(ExpenseIncome);
};

module.exports = Partner_OtherIncomeSchema;