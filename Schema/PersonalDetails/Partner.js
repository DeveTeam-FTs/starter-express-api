const Joi = require("joi");

const  PartnerSchema = (Partner) => {
    const schema = Joi.object({
    Email: Joi.string().required(),
    partnerTitle: Joi.string(),
    partnerGivenName: Joi.string(),
    partnerSurname: Joi.string(),
    partnerPreferredName: Joi.string(),
    partnerGender: Joi.string(),
    partnerDOB: Joi.string(),
    partnerAge: Joi.number(),
    partnerMaritalStatus: Joi.string(),
    partnerEmploymentStatus: Joi.string(),
    partnerHealth: Joi.string(),
    partnerSmoker: Joi.bool(),
    partnerPlannedRetirementAge: Joi.number(),
    partnerHomeAddress: Joi.string(),
    partnerPostcode: Joi.number(),
    partnerHomePhone: Joi.number(),
    partnerWorkPhone: Joi.number(),
    partnerMobile: Joi.number(),
    partnerEmail: Joi.string(),
    partnerPostalAddress: Joi.string(),
    partnerPostalPostCode: Joi.number(),
    partnerMiddleName:Joi.string(),
    partnerOccupationID:Joi.string(),
    partnerTaxResidentRadio:Joi.string(),
    partnerPrivateHealthCoverRadio:Joi.string(),
    partnerHELPSDebtRadio:Joi.string(),
    partnerSameAsClient: Joi.boolean()

    });
    return schema.validate(Partner);
};

module.exports = PartnerSchema;