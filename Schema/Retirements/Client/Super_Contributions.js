const Joi = require("joi");

const Super_ContributionSchema = (Contribution) => {
  const schema = Joi.object({
    Email: Joi.string(),
    ContributeFund: Joi.string(),
    NonConcessional1: Joi.number(),
    Other1: Joi.number(),
    EmployerContributions1: Joi.number(),
    SalaryPersonalDed1: Joi.number(),
    NonConcessional2: Joi.number(),
    Other2: Joi.number(),
    EmployerContributions2: Joi.number(),
    SalaryPersonalDed2: Joi.number(),
    NonConcessional3: Joi.number(),
    Other3: Joi.number(),
    EmployerContributions3: Joi.number(),
    SalaryPersonalDed3: Joi.number(),
  });
  return schema.validate(Contribution);
};

module.exports = Super_ContributionSchema;
