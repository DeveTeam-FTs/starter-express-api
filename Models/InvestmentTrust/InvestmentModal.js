const Mongoose = require('mongoose');




const InvestmentPropertiesModalSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    TotalPropertyExpenses:{
        type:Number
    },
    BodyCorporateFees:{
        type:Number
    },
    CouncilRates:{
        type:Number
    },
    GardeningAndLawnMowing:{
        type:Number
    },
    Insurance:{
        type:Number
    },
    LandTax:{
        type:Number
    },
    RepairsAndMaintenance:{
        type:Number
    },
    WaterCharges:{
        type:Number
    },
    Other:{
        type:Number
    },
    TelephoneAndInternet:{
        type:Number
    },
    ProfessionalFees:{
        type:Number
    },
    AllOther:{
        type:Number
    }


});

module.exports = Mongoose.model("InvestmentPropertiesModalDetails", InvestmentPropertiesModalSchema);