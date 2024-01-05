const Joi = require("joi");

const Client_InsuranceSchema = (Insurance) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Weeks_without_PrimaryIncome: Joi.number(),
        InusranceRejected: Joi.string(),
        Details_InusranceRejected: Joi.string(),
        ClaimedBenifit: Joi.string(),
        Details_ClaimedBenifit: Joi.string(),
        Reason_Impediment_Disability: Joi.string(),
        Details_Reason_Impediment_Disability: Joi.string(),
        PersonalInsuranceCover: Joi.string()

  });
    return schema.validate(Insurance);
};

module.exports = Client_InsuranceSchema;