const Joi = require("joi");

const PartnerModal_EstatePlanning = (Estate) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        partnerEPYear: Joi.number(),
        partnerEPCurrentWill: Joi.string(),
        partnerEPExecutor: Joi.string(),
        partnerEPGuardianship: Joi.string(),
        partnerEPTrust: Joi.string(),
        partnerEPFuneralPlan: Joi.string(),
        partnerEPExpense: Joi.string(),
        partnerEPNeeds: Joi.string(),
        partnerEPPOA: Joi.string(),
        partnerEPPOAType: Joi.string(),
        partnerEPPOANumber: Joi.string(),
        partnerEPPOAName1: Joi.string(),
        partnerEPPOAName2: Joi.string(),
        partnerEPPOAName3: Joi.string(),
        partnerEPPOAName4: Joi.string(),
        partnerEPPOAName5: Joi.string(),
    });
    return schema.validate(Estate);
};

module.exports = PartnerModal_EstatePlanning;