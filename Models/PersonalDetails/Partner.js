const Mongoose = require("mongoose");

const PartnerSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    partnerTitle:{
        type: String
    },
    partnerGivenName:{
        type: String        
    },
    partnerSurname:{
        type: String,
    },
    partnerPreferredName:{
        type: String
    },
    partnerGender:{
        type: String        
    },
    partnerDOB:{
        type: String
    },
    partnerAge:{
        type: Number
    },
    partnerMaritalStatus:{
        type: String        
    },
    partnerEmploymentStatus:{
        type: String        
    },
    partnerHealth:{
        type: String        
    },
    partnerSmoker:{
        type: Boolean
    },
    partnerPlannedRetirementAge:{
        type: Number        
    },
    partnerHomeAddress:{
        type: String
    },
    partnerPostcode:{
        type: Number
    },
    partnerHomePhone:{
        type: Number
    },
    partnerWorkPhone:{
        type: Number
    },
    partnerMobile:{
        type: Number
    },
    partnerEmail:{
        type: String
    },
    partnerPostalAddress:{
        type: String
    },
    partnerPostalPostCode:{
        type: Number
    },
   
    partnerMiddleName:{
        type: String
    },
    partnerOccupationID:{
        type: String
    }, 
    partnerTaxResidentRadio:{
        type: String
    },
    partnerPrivateHealthCoverRadio:{
        type: String
    },
    partnerHELPSDebtRadio:{
        type: String
    },
    partnerSameAsClient:{
        type: Boolean
    },
});

module.exports = Mongoose.model("PartnerDetails", PartnerSchema);