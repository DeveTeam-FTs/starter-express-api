const Joi = require("joi");

const Client_EstatePlanning = (Estate) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        clientEPOwner: Joi.string(),
        clientEPYear: Joi.number(),
        clientEPCurrentWill: Joi.string(),
        clientEPExecutor: Joi.string(),
        clientEPGuardianship: Joi.string(),
        clientEPTrust: Joi.string(),
        clientEPFuneralPlan: Joi.string(),
        clientEPExpense: Joi.string(),
        clientEPNeeds: Joi.string(),
        clientEPPOA: Joi.string(),
        clientEPPOAType: Joi.string(),
        clientEPPOANumber: Joi.string(),
        clientEPPOAName1: Joi.string(),
        clientEPPOAName2: Joi.string(),
        clientEPPOAName3: Joi.string(),
        clientEPPOAName4: Joi.string(),
        clientEPPOAName5: Joi.string(),
    });
    return schema.validate(Estate);
};

module.exports = Client_EstatePlanning;