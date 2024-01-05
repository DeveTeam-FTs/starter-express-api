const Joi = require("joi");

const Client_ExpensesSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
        clientExpenseType: Joi.string(),
        clientExpensesItem: Joi.string(),
        clientExpenseAmount: Joi.number(),
        clientExpenseYear: Joi.number()


         
    });
    return schema.validate(ExpenseIncome);
};

module.exports = Client_ExpensesSchema;