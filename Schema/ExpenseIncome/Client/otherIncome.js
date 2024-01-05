const Joi = require("joi");

const Client_OtherIncomeSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
        clientOtherOwner: Joi.string(),
        clientOtherIncomeType: Joi.string(),
        clientOtherAmount: Joi.number()

         
  

    });
    return schema.validate(ExpenseIncome);
};

module.exports = Client_OtherIncomeSchema;