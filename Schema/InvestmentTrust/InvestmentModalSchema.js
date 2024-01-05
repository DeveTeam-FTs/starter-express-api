const Joi = require('joi');




const InvestmentPropertiesModal = (InvestmentPropertiesModal) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        TotalPropertyExpenses: Joi.number(),
        BodyCorporateFees: Joi.number(),
        CouncilRates: Joi.number(),
        GardeningAndLawnMowing: Joi.number(),
        Insurance: Joi.number(),
        LandTax: Joi.number(),
        RepairsAndMaintenance: Joi.number(),
        WaterCharges: Joi.number(),
        Other: Joi.number(),
        TelephoneAndInternet: Joi.number(),
        ProfessionalFees: Joi.number(),
        AllOther: Joi.number()

    });
    return schema.validate(InvestmentPropertiesModal);
};

module.exports = InvestmentPropertiesModal;