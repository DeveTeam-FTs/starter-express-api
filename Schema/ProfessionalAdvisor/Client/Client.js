const Joi = require("joi");

const Client_AdvisorSchema = (Client_Advisor) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        ProfessionalAdvisor: Joi.string(),
    })
    return schema.validate(Client_Advisor);
};

module.exports = Client_AdvisorSchema;