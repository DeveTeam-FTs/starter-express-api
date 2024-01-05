const Mongoose = require("mongoose");

const ClientAdvisor_AdvisorSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    clientSolicitor_Name:{
        type: String
    },
    clientSolicitor_Company:{
        type: String
    },
    clientSolicitor_Phone:{
        type: Number
    },
    clientSolicitor_Email:{
        type: String
    },
    clientAccountant_Name:{
        type: String
    },
    clientAccountant_Company:{
        type: String
    },
    clientAccountant_Phone:{
        type: Number
    },
    clientAccountant_Email:{
        type: String
    },
    clientInsuranceAdvisor_Name:{
        type: String
    },
    clientInsuranceAdvisor_Company:{
        type: String
    },
    clientInsuranceAdvisor_Phone:{
        type: Number
    },
    clientInsuranceAdvisor_Email:{
        type: String
    },
    clientDoctor_Name:{
        type: String
    },
    clientDoctor_Company:{
        type: String
    },
    clientDoctor_Phone:{
        type: Number
    },
    clientDoctor_Email:{
        type: String
    },
    clientOther_Name:{
        type: String
    },
    clientOther_Company:{
        type: String
    },
    clientOther_Phone:{
        type: Number
    },
    clientOther_Email:{
        type: String
    },
});

module.exports = Mongoose.model("ClientAdvisor_AdvisorSchema", ClientAdvisor_AdvisorSchema);