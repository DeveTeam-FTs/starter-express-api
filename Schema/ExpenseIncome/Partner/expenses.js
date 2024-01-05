const Joi = require("joi");

const partner_ExpensesSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
        partnerExpenseType: Joi.string(),
        partnerExpensesItem: Joi.string(),
        partnerExpenseAmount: Joi.number(),
        partnerExpenseYear: Joi.number()


         
    });
    return schema.validate(ExpenseIncome);
};

module.exports = partner_ExpensesSchema;