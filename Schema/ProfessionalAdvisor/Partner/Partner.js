const Joi = require("joi");

const Partner_AdvisorSchema = (Partner_Advisor) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        ProfessionalAdvisor: Joi.string()
    })
    return schema.validate(Partner_Advisor);
};

module.exports = Partner_AdvisorSchema;