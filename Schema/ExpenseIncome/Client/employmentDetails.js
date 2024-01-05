const Joi = require("joi");

const Client_EmploymentDetailsSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),

        //Client employment details
    clientEMPOwner: Joi.string(),
    clientEMPOccupation: Joi.string(),
    clientEMPEmployment: Joi.string(),
    clientEMPName: Joi.string(),
    clientEMPCommencement: Joi.string(),
    clientEMPHours: Joi.number(), //number
    clientEMPExcluding: Joi.number(), //number
    clientEMPSuperAnnuation: Joi.number(), //number
    clientEMPChoiceradio: Joi.string(),
    clientEMPSacrificeradio: Joi.string(),
    clientEMPSalarySacrifice: Joi.number(), //number
    clientEMPcontributionradio: Joi.string(),
    clientEMPTaxContribution: Joi.number(), //'number
    clientEMPSignificantlyradio: Joi.string(),
    clientEMPUnusedSickLeave: Joi.number(), //number
    clientEMPUnusedSickLeaveType: Joi.string(),
    clientEMPUnusedAnnual: Joi.number(), //number
    clientEMPUnusedAnnualType: Joi.string(),
    clientEMPUnusedlong: Joi.number(), //number
    clientEMPUnusedlongType: Joi.string(),
    clientEMPCurrentlyRadio: Joi.string(),
    clientEMPFBTStatus: Joi.string(),
    clientEMPSalaryRadio: Joi.string(),
    clientEMPCostCar: Joi.number(), //number
    clientEMPFBTradio: Joi.string(),
    clientEMPCarPackaged: Joi.number(), //number
    clientEMPSalaryPackageRadio: Joi.string(),
    clientEMPAbilitytoSacrifice: Joi.number(), //number
                


    });
    return schema.validate(ExpenseIncome);
};

module.exports = Client_EmploymentDetailsSchema;