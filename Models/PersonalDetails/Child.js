const Mongoose = require("mongoose");

const ChildSchema = new Mongoose.Schema({ 
    
    Email:{
        type: String
    },
    childSurname:{
        type: String
    },
    childGivenName:{
        type: String
    },
    
    childDoB:{
        type: String
    },
    
    childAge:{
        type: Number
    },
    
    childGender:{
        type: String
    },
    childRelationship:{
        type: String
    },
    childDependentRadio:{
        type: String
    },
    childDependantUntilAge:{
        type: Number
    },

});

module.exports = Mongoose.model("ChildDetails", ChildSchema);