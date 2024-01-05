const Joi = require("joi");

const Client_RiskSchema = (Risk) => {
  const schema = Joi.object({
    Email: Joi.string().min(0).max(500).required(),
    Question1: Joi.number().min(0).max(500).required(),
    Question2: Joi.number().min(0).max(500).required(),
    Question3: Joi.number().min(0).max(500).required(),
    Question4: Joi.number().min(0).max(500).required(),
    Question5: Joi.number().min(0).max(500).required(),
    Question6: Joi.number().min(0).max(500).required(),
    Question7: Joi.number().min(0).max(500).required(),
    Question8: Joi.number().min(0).max(500).required(),
  });
  return schema.validate(Risk);
};

module.exports = Client_RiskSchema;
