const Mongoose = require("mongoose");

const Partner_RiskSchema = new Mongoose.Schema({
  Email: {
    type: String,
  },
  PartnerQuestion1: {
    type: Number,
  },
  PartnerQuestion2: {
    type: Number,
  },
  PartnerQuestion3: {
    type: Number,
  },
  PartnerQuestion4: {
    type: Number,
  },
  PartnerQuestion5: {
    type: Number,
  },
  PartnerQuestion6: {
    type: Number,
  },
  PartnerQuestion7: {
    type: Number,
  },
  PartnerQuestion8: {
    type: Number,
  },
});

module.exports = Mongoose.model("RiskPartnerDetails", Partner_RiskSchema);
