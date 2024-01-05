const Mongoose = require("mongoose");

const Client_Inheritance = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
    //******************************** Personal Assets - Assets ********************************
    InheritanceDescription:{
        type: String
    },
    InheritanceYear:{
        type: String
    },
    InheritanceAmount:{
        type: Number
    },
  


//******************************** End of Personal Assets - Assets ********************************
});

module.exports = Mongoose.model("ClientInheritance", Client_Inheritance);