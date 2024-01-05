const Mongoose = require("mongoose");

const Client_AssetsSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
    //******************************** Personal Assets - Assets ********************************
    ContentsPA:{
        type: Number
    },
    MotorVehicle1PA:{
        type: Number
    },
  
    MotorVehicle2PA:{
        type: Number
    },
  
    BoatPA:{
        type: Number
    },

    CaravanPA:{
        type: Number
    },
    OtherPA:{
        type: Number
    },

//******************************** End of Personal Assets - Assets ********************************
});

module.exports = Mongoose.model("ClientPersonalAssetsDetails", Client_AssetsSchema);