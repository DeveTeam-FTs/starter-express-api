const Mongoose = require("mongoose");

const clientEmploymentDetails = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },

    //Client employment details
    clientEMPOwner: { type : String },

    clientEMPOccupation: { type : String },
    clientEMPEmployment: { type : String },
    clientEMPName: { type : String },
    clientEMPCommencement: { type : String },
    clientEMPHours: { type : Number },//number
    clientEMPExcluding: { type : Number },//number
    clientEMPSuperAnnuation: { type : Number },//number
    clientEMPChoiceradio: { type : String },
    clientEMPSacrificeradio: { type : String },
    clientEMPSalarySacrifice: { type : Number },//number
    clientEMPcontributionradio: { type : String },
    clientEMPTaxContribution: { type : Number },//'number
    clientEMPSignificantlyradio: { type : String },
    clientEMPUnusedSickLeave: { type : Number },//number
    clientEMPUnusedSickLeaveType: { type : String },
    clientEMPUnusedAnnual: { type : Number },//number
    clientEMPUnusedAnnualType: { type : String },
    clientEMPUnusedlong: { type : Number },//number
    clientEMPUnusedlongType: { type : String },
    clientEMPCurrentlyRadio: { type : String },
    clientEMPFBTStatus: { type : String },
    clientEMPSalaryRadio: { type : String },
    clientEMPCostCar: { type : Number },//number
    clientEMPFBTradio: { type : String },
    clientEMPCarPackaged: { type : Number },//number
    clientEMPSalaryPackageRadio: { type : String },
    clientEMPAbilitytoSacrifice: { type : Number },//number


//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Client_IncomeExpenseEmploymentDetails", clientEmploymentDetails);