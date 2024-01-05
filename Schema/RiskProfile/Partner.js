const Joi = require("joi");

const Partner_RiskSchema = (Risk) => {
  const schema = Joi.object({
    Email: Joi.string().min(0).max(500).required(),
    PartnerQuestion1: Joi.number().min(0).max(500).required(),
    PartnerQuestion2: Joi.number().min(0).max(500).required(),
    PartnerQuestion3: Joi.number().min(0).max(500).required(),
    PartnerQuestion4: Joi.number().min(0).max(500).required(),
    PartnerQuestion5: Joi.number().min(0).max(500).required(),
    PartnerQuestion6: Joi.number().min(0).max(500).required(),
    PartnerQuestion7: Joi.number().min(0).max(500).required(),
    PartnerQuestion8: Joi.number().min(0).max(500).required(),
  });
  return schema.validate(Risk);
};

module.exports = Partner_RiskSchema;
