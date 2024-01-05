const Joi = require('joi');

const InvestmentProperties_Inner = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        Email:Joi.string().required(),
        InvestmentModalTotalExpense: Joi.number(),
        InvestmentModalCorporateFees: Joi.number(),
        InvestmentModalCouncilRates: Joi.number(),
        InvestmentModalLawnMoving: Joi.number(),
        InvestmentModalInsurance: Joi.number(),
        InvestmentModalLandTax: Joi.number(),
        InvestmentModalRepairs: Joi.number(),
        InvestmentModalWaterCharges: Joi.number(),
        InvestmentModalOthers: Joi.number(),
        InvestmentModalTelephone: Joi.number(),
        InvestmentModalProfessionalFees: Joi.number(),
        InvestmentModalAllOthers: Joi.number()
    });
    return Schema.validate(Share);
};

module.exports = InvestmentProperties_Inner;