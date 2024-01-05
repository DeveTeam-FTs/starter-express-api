const Joi = require("joi");

const Partner_InsuranceSchema = (Insurance) => {
    const schema = Joi.object({
        Email: Joi.string().min(1).required(),
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

module.exports = Partner_InsuranceSchema;