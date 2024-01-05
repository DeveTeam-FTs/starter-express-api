const Mongoose = require("mongoose");

const RetirementSchema = new Mongoose.Schema({
    Email:{
        type: String
    },

    Annuities_ProductProvider:{
        type: String
    },
    Annuities_InvestmentAmount:{
        type: Number
    },
    Annuities_CurrentValue:{
        type: Number
    },
    Annuities_AnnuityType:{
        type: String
    },
    Annuities_RCV:{
        type: Number
    },
    Annuities_Term:{
        type: Number
    },
    Annuities_YearsUntilMaturity:{
        type: Number
    },
    Annuities_RegularIncome:{
        type: Number
    },
    Annuities_Frequency:{
        type: String
    },
    Annuities_AnnualInflation:{
        type: String
    },
    Annuities_Other:{
        type: String
    },
// ************************* End of Annuitites *************************

});

module.exports = Mongoose.model("RetirementPartnerAnnuitiesDetails", RetirementSchema);