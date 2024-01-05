const Mongoose = require("mongoose");

const ClientInsuranceSchema = new Mongoose.Schema({
    Email:{
        type: String
    },
    Weeks_without_PrimaryIncome:{
        type: Number
    },
    InusranceRejected:{
        type: String
    },
    Details_InusranceRejected:{
        type: String
    },
    ClaimedBenifit:{
        type: String
    },
    Details_ClaimedBenifit:{
        type: String
    },
    Reason_Impediment_Disability:{
        type: String
    },
    Details_Reason_Impediment_Disability:{
        type: String
    },
    PersonalInsuranceCover:{
        type: String
    }
});

module.exports = Mongoose.model("ClientInsuranceSchema", ClientInsuranceSchema);