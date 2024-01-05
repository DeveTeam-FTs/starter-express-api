const Mongoose = require("mongoose");

const ClientSchema = new Mongoose.Schema({ 
    
    clientTitle:{
        type: String
    },
    clientGivenName:{
        type: String        
    },
    clientSurname:{
        type: String
    },
    clientPreferredName:{
        type: String
    },
    clientGender:{
        type: String        
    },
    clientDOB:{
        type: String
    },
    clientAge:{
        type: Number
    },
    clientMaritalStatus:{
        type: String        
    },
    clientEmploymentStatus:{
        type: String        
    },
    clientHealth:{
        type: String        
    },
    clientSmoker:{
        type: Boolean
    },
    clientPlannedRetirementAge:{
        type: Number        
    },
    clientHomeAddress:{
        type: String
    },
    clientPostcode:{
        type: Number
    },
    clientHomePhone:{
        type: Number
    },
    clientWorkPhone:{
        type: Number
    },
    clientMobile:{
        type: Number
    },
    Email:{
        type: String
    },
    clientPostalAddress:{
        type: String
    },
    clientPostalPostCode:{
        type: Number
    },
   
    clientMiddleName:{
        type: String
    },
    clientOccupationID:{
        type: String
    }, 
    clientTaxResidentRadio:{
        type: String
    },
    clientPrivateHealthCoverRadio:{
        type: String
    },
    clientHELPSDebtRadio:{
        type: String
    },
    clientSameAsAbove:{
        type: Boolean
    },
});

module.exports = Mongoose.model("ClientDetails", ClientSchema);