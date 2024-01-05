const Mongoose = require("mongoose");

const Client_AdvisorSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    ProfessionalAdvisor:{
        type: String
    }
});

module.exports = Mongoose.model("Client_AdvisorSchema", Client_AdvisorSchema);