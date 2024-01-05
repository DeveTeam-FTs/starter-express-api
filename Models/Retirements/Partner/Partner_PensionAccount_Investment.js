const Mongoose = require("mongoose");

const Pension_InvestmentSchema = new Mongoose.Schema({
    Email:{
        type: String
    },
    InvestmentOption:{
        type: String
    },
    CurrentValue:{
        type: Number
    }
});

module.exports = Mongoose.model("Partner_Pension_InvestmentDetails", Pension_InvestmentSchema);