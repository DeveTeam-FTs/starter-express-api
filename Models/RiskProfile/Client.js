const Mongoose = require("mongoose");

const Client_RiskSchema = new Mongoose.Schema({
  Email: {
    type: String,
  },
  Question1: {
    type: Number,
  },
  Question2: {
    type: Number,
  },
  Question3: {
    type: Number,
  },
  Question4: {
    type: Number,
  },
  Question5: {
    type: Number,
  },
  Question6: {
    type: Number,
  },
  Question7: {
    type: Number,
  },
  Question8: {
    type: Number,
  },
});

module.exports = Mongoose.model("RiskClientDetails", Client_RiskSchema);
