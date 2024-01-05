const Mongoose = require("mongoose");

const PartnerAdvisor_AdvisorSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    partnerSolicitor_Name:{
        type: String
    },
    partnerSolicitor_Company:{
        type: String
    },
    partnerSolicitor_Phone:{
        type: String
    },
    partnerSolicitor_Email:{
        type: String
    },
    partnerAccountant_Name:{
        type: String
    },
    partnerAccountant_Company:{
        type: String
    },
    partnerAccountant_Phone:{
        type: String
    },
    partnerAccountant_Email:{
        type: String
    },
    partnerInsuranceAdvisor_Name:{
        type: String
    },
    partnerInsuranceAdvisor_Company:{
        type: String
    },
    partnerInsuranceAdvisor_Phone:{
        type: String
    },
    partnerInsuranceAdvisor_Email:{
        type: String
    },
    partnerDoctor_Name:{
        type: String
    },
    partnerDoctor_Company:{
        type: String
    },
    partnerDoctor_Phone:{
        type: String
    },
    partnerDoctor_Email:{
        type: String
    },
    partnerOther_Name:{
        type: String
    },
    partnerOther_Company:{
        type: String
    },
    partnerOther_Phone:{
        type: String
    },
    partnerOther_Email:{
        type: String
    },
});

module.exports = Mongoose.model("PartnerAdvisor_AdvisorSchema", PartnerAdvisor_AdvisorSchema);