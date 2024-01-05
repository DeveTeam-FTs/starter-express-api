const Joi = require("joi");

const PartnerAdvisor_AdvisorSchema = (PartnerAdvisor_Advisor) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        partnerSolicitor_Name: Joi.string(),
        partnerSolicitor_Company: Joi.string(),
        partnerSolicitor_Phone: Joi.number(),
        partnerSolicitor_Email: Joi.string(),
        partnerAccountant_Name: Joi.string(),
        partnerAccountant_Company: Joi.string(),
        partnerAccountant_Phone: Joi.number(),
        partnerAccountant_Email: Joi.string(),
        partnerInsuranceAdvisor_Name: Joi.string(),
        partnerInsuranceAdvisor_Company: Joi.string(),
        partnerInsuranceAdvisor_Phone: Joi.number(),
        partnerInsuranceAdvisor_Email: Joi.string(),
        partnerDoctor_Name: Joi.string(),
        partnerDoctor_Company: Joi.string(),
        partnerDoctor_Phone: Joi.number(),
        partnerDoctor_Email: Joi.string(),
        partnerOther_Name: Joi.string(),
        partnerOther_Company: Joi.string(),
        partnerOther_Phone: Joi.number(),
        partnerOther_Email: Joi.string()
    })
    return schema.validate(PartnerAdvisor_Advisor);
};

module.exports = PartnerAdvisor_AdvisorSchema;