const Mongoose = require("mongoose");

const Partner_AdvisorSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    ProfessionalAdvisor:{
        type: String
    }
});

module.exports = Mongoose.model("Partner_AdvisorSchema", Partner_AdvisorSchema);