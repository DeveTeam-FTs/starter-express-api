const Mongoose = require("mongoose");

const InvestmentPropertiesSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type:String
    },
    InvestmentModalTotalExpense: {
        type: Number
    },
    InvestmentModalCorporateFees: {
        type: Number
    },
    InvestmentModalCouncilRates: {
        type: Number
    },
    InvestmentModalLawnMoving: {
        type: Number
    },
    InvestmentModalInsurance: {
        type: Number
    },
    InvestmentModalLandTax: {
        type: Number
    },
    InvestmentModalRepairs: {
        type: Number
    },
    InvestmentModalWaterCharges: {
        type: Number
    },
    InvestmentModalOthers: {
        type: Number
    },
    InvestmentModalTelephone: {
        type: Number
    },
    InvestmentModalProfessionalFees: {
        type: Number
    },
    InvestmentModalAllOthers: {
        type: Number
    }
});

module.exports = Mongoose.model("Inner_InvestmentPropertiesDetails", InvestmentPropertiesSchema);