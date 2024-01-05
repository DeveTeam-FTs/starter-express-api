const Joi = require("joi");

const Partner_EmploymentDetailsSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),

        //Partner employment details
    partnerEMPOccupation: Joi.string(),
    partnerEMPEmployment: Joi.string(),
    partnerEMPName: Joi.string(),
    partnerEMPCommencement: Joi.string(),
    partnerEMPHours: Joi.number(), //number
    partnerEMPExcluding: Joi.number(), //number
    partnerEMPSuperAnnuation: Joi.number(), //number
    partnerEMPChoiceradio: Joi.string(),
    partnerEMPSacrificeradio: Joi.string(),
    partnerEMPSalarySacrifice: Joi.number(), //number
    partnerEMPcontributionradio: Joi.string(),
    partnerEMPTaxContribution: Joi.number(), //'number
    partnerEMPSignificantlyradio: Joi.string(),
    partnerEMPUnusedSickLeave: Joi.number(), //number
    partnerEMPUnusedSickLeaveType: Joi.string(),
    partnerEMPUnusedAnnual: Joi.number(), //number
    partnerEMPUnusedAnnualType: Joi.string(),
    partnerEMPUnusedlong: Joi.number(), //number
    partnerEMPUnusedlongType: Joi.string(),
    partnerEMPCurrentlyRadio: Joi.string(),
    partnerEMPFBTStatus: Joi.string(),
    partnerEMPSalaryRadio: Joi.string(),
    partnerEMPCostCar: Joi.number(), //number
    partnerEMPFBTradio: Joi.string(),
    partnerEMPCarPackaged: Joi.number(), //number
    partnerEMPSalaryPackageRadio: Joi.string(),
    partnerEMPAbilitytoSacrifice: Joi.number(), //number
                


    });
    return schema.validate(ExpenseIncome);
};

module.exports = Partner_EmploymentDetailsSchema;