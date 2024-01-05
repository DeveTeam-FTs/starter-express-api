const Mongoose = require("mongoose");

const partnerEmploymentDetails = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    //Partner employment details
    partnerEMPOccupation: { type : String },
    partnerEMPEmployment: { type : String },
    partnerEMPName: { type : String },
    partnerEMPCommencement: { type : String },
    partnerEMPHours: { type : Number },//number
    partnerEMPExcluding: { type : Number },//number
    partnerEMPSuperAnnuation: { type : Number },//number
    partnerEMPChoiceradio: { type : String },
    partnerEMPSacrificeradio: { type : String },
    partnerEMPSalarySacrifice: { type : Number },//number
    partnerEMPcontributionradio: { type : String },
    partnerEMPTaxContribution: { type : Number },//'number
    partnerEMPSignificantlyradio: { type : String },
    partnerEMPUnusedSickLeave: { type : Number },//number
    partnerEMPUnusedSickLeaveType: { type : String },
    partnerEMPUnusedAnnual: { type : Number },//number
    partnerEMPUnusedAnnualType: { type : String },
    partnerEMPUnusedlong: { type : Number },//number
    partnerEMPUnusedlongType: { type : String },
    partnerEMPCurrentlyRadio: { type : String },
    partnerEMPFBTStatus: { type : String },
    partnerEMPSalaryRadio: { type : String },
    partnerEMPCostCar: { type : Number },//number
    partnerEMPFBTradio: { type : String },
    partnerEMPCarPackaged: { type : Number },//number
    partnerEMPSalaryPackageRadio: { type : String },
    partnerEMPAbilitytoSacrifice: { type : Number },//number


//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Partner_IncomeExpenseEmploymentDetails", partnerEmploymentDetails);