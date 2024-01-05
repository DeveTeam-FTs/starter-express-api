const Joi = require("joi");

const ClientSchema = (Client) => {
  const schema = Joi.object({
    clientTitle: Joi.string(),
    clientGivenName: Joi.string(),
    clientSurname: Joi.string(),
    clientPreferredName: Joi.string(),
    clientGender: Joi.string(),
    clientDOB: Joi.string(),
    clientAge: Joi.number(),
    clientMaritalStatus: Joi.string(),
    clientEmploymentStatus: Joi.string(),
    clientHealth: Joi.string(),
    clientSmoker: Joi.bool(),
    clientPlannedRetirementAge: Joi.number(),
    clientHomeAddress: Joi.string(),
    clientPostcode: Joi.number(),
    clientHomePhone: Joi.number(),
    clientWorkPhone: Joi.number(),
    clientMobile: Joi.number(),
    Email: Joi.string(),
    clientPostalAddress: Joi.string(),
    clientPostalPostCode: Joi.number(),
    clientMiddleName:Joi.string(),
    clientOccupationID:Joi.string(),
    clientTaxResidentRadio:Joi.string(),
    clientPrivateHealthCoverRadio:Joi.string(),
    clientHELPSDebtRadio:Joi.string(),
    clientSameAsAbove: Joi.bool()


  });
  return schema.validate(Client);
};

module.exports = ClientSchema;
