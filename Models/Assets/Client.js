const Mongoose = require("mongoose");

const Client_AssetsSchema = new Mongoose.Schema({
  // id:{
  //     type: Number
  // },,
  Email: {
    type: String,
  },
  FamilyHome: {
    type: String,
  },
  PersonalAssets: {
    type: String,
  },
  PersonalDebts: {
    type: String,
  },
});

module.exports = Mongoose.model("ClientAssetDetails", Client_AssetsSchema);
