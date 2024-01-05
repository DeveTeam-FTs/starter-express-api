const Joi = require("joi");

const Super_BeneficiarySchema = (Beneficiary) => {
    const schema = Joi.object({
        Email: Joi.string(),  
        NominatedBeneficiary: Joi.string(),
        NominationType: Joi.string(),
        No_ofBeneficiaries: Joi.number(),
        Beneficiary1: Joi.string(),
        BenefitShare1: Joi.number(),
        Relationship1: Joi.string(),
        Beneficiary2: Joi.string(),
        BenefitShare2: Joi.number(),
        Relationship2: Joi.string(),
        Beneficiary3: Joi.string(),
        BenefitShare3: Joi.number(),
        Relationship3: Joi.string(),
        Beneficiary4: Joi.string(),
        BenefitShare4: Joi.number(),
        Relationship4: Joi.string(),
        Beneficiary5: Joi.string(),
        BenefitShare5: Joi.number(),
        Relationship5: Joi.string()
    })
    return schema.validate(Beneficiary)
};

module.exports = Super_BeneficiarySchema