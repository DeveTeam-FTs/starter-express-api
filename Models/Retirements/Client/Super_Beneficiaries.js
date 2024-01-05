const Mongoose = require("mongoose");

const Super_BeneficiarySchema = new Mongoose.Schema({
    Email:{
        type: String
    },
    NominatedBeneficiary:{
        type: String
    },
    NominationType:{
        type: String
    },
    No_ofBeneficiaries:{
        type: Number
    },
    Beneficiary1:{
        type: String
    },
    BenefitShare1:{
        type: Number
    },
    Relationship1:{
        type: String
    },
    Beneficiary2:{
        type: String
    },
    BenefitShare2:{
        type: Number
    },
    Relationship2:{
        type: String
    },
    Beneficiary3:{
        type: String
    },
    BenefitShare3:{
        type: Number
    },
    Relationship3:{
        type: String
    },
    Beneficiary4:{
        type: String
    },
    BenefitShare4:{
        type: Number
    },
    Relationship4:{
        type: String
    },
    Beneficiary5:{
        type: String
    },
    BenefitShare5:{
        type: Number
    },
    Relationship5:{
        type: String
    }
});

module.exports = Mongoose.model("Client_Super_BeneficiaryDetails", Super_BeneficiarySchema);