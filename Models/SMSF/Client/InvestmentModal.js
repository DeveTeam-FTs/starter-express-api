const Mongoose = require('mongoose');



const InvestmentModal = new Mongoose.Schema({

    Email: {
        type: String
    },
    
    TotalExpense: {
        type: Number
    },
    CorporateFees:{
        type:Number
    },
    CouncilRates:{
        type:Number
    },
    LawnMoving:{
        type:Number
    },
    Insurance:{
        type:Number
    },
    LandTax:{
        type:Number
    },
    Repairs:{
        type:Number
    },
    WaterCharges:{
        type:Number
    },
    Others:{
        type:Number
    },
    Telephone:{
        type:Number
    },
    ProfessionalFees:{
        type:Number
    },
    AllOthers:{
        type:Number
    }
  
});

module.exports = Mongoose.model("InvestmentModalFDetails", InvestmentModal);