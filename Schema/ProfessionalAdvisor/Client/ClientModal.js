const Joi = require("joi");

const ClientAdvisor_AdvisorSchema = (ClientAdvisor_Advisor) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        clientSolicitor_Name: Joi.string(),
        clientSolicitor_Company: Joi.string(),
        clientSolicitor_Phone: Joi.number(),
        clientSolicitor_Email: Joi.string(),
        clientAccountant_Name: Joi.string(),
        clientAccountant_Company: Joi.string(),
        clientAccountant_Phone: Joi.number(),
        clientAccountant_Email: Joi.string(),
        clientInsuranceAdvisor_Name: Joi.string(),
        clientInsuranceAdvisor_Company: Joi.string(),
        clientInsuranceAdvisor_Phone: Joi.number(),
        clientInsuranceAdvisor_Email: Joi.string(),
        clientDoctor_Name: Joi.string(),
        clientDoctor_Company: Joi.string(),
        clientDoctor_Phone: Joi.number(),
        clientDoctor_Email: Joi.string(),
        clientOther_Name: Joi.string(),
        clientOther_Company: Joi.string(),
        clientOther_Phone: Joi.number(),
        clientOther_Email: Joi.string()
    })
    return schema.validate(ClientAdvisor_Advisor);
};

module.exports = ClientAdvisor_AdvisorSchema;