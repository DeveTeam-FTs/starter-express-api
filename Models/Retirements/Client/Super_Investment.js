const Mongoose = require("mongoose");

const Super_InvestmentSchema = new Mongoose.Schema({
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

module.exports = Mongoose.model("Client_Super_InvestmentDetails", Super_InvestmentSchema);